import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
//libraries uuid avec npm install uuid
// import { v4 as uuidv4 } from 'uuid'

export const useBillStore = defineStore('bill', {
  state: () => ({
    bills,
    bill: null
  }),
  getters: {},
  actions: {
    // récupère les données depuis l'API : fonction asynchrone
    async getAllBills() {
      const response = await this.$http.get('/bills')
      this.bills = response.data
    },

    //recup une facture dans le store au moment de l'édition
    async setBill(id) {
      // this.bill = this.bills.find((b) => b.id == parseInt(id))
      // si je modifie une bill, je fais un appel à l"API pour récupérer les données :
      const response = await this.$http.get('/bills/' + id)
      this.bill = response.data
    },
    async onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      // this.bills = this.bills.filter((b) => b.id != bill.id)
      const response = await this.$http.delete('/bills/' + bill.id)
      console.log(response.data)
      await this.getAllBills()
    },
    // recherche la facture correspondante dans le store, et enregistre les modifications
    async onUpdateBill(bill) {
      const response = await this.$http.patch('/bills/' + bill.id, bill)
      console.log(response.data)
      // je vidange la donnée d'édition d'une bill
      this.bill = null
      await this.getAllBills()
    },
    //ceée une nouvelle facture
    async onAddBill(bill) {
      // Generate a unique ID for the new bill
      //on aurait pu installer uuid pour générer un ID unique
      //https://www.npmjs.com/package/uuid
      //this.bills.push({ ...bill, id: Date.now() })
      // this.bills.push({ ...bill, id: uuidv4() })
      const response = await this.$http.post('/bills', bill)
      console.log(response.data)
      await this.getAllBills()
    }
  }
})

// != signifie "différent de en valeur "
// == signifie "égal à en valeur "
// === signifie "égal à en valeur et en type "
