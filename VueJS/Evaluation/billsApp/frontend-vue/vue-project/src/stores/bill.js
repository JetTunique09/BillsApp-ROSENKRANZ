import { bills } from '@/seeds/bills.js'
import { defineStore } from 'pinia'
//libraries uuid avec npm install uuid
import { v4 as uuidv4 } from 'uuid'

export const useBillStore = defineStore('bill', {
  state: () => ({
    bills,
    bill: null
  }),
  getters: {},
  actions: {
    //recup une facture dans le store au moment de l'édition
    setBill(id) {
      this.bill = this.bills.find((b) => b.id == parseInt(id))
    },
    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id != bill.id)
    },
    onUpdateBill(bill) {
      const index = this.bills.findIndex((b) => b.id == bill.id)
      if (index === -1) {
        // Si la facture n'existe pas encore, ajoutez-la
        this.bills.push({ ...bill })
      } else {
        // Sinon, mettez-la à jour
        this.bills[index] = { ...bill }
      }
      this.bill = null
    },
    //ceée une nouvelle facture
    onAddBill(bill) {
      // Generate a unique ID for the new bill
      //on aurait pu installer uuid pour générer un ID unique
      //https://www.npmjs.com/package/uuid
      //this.bills.push({ ...bill, id: Date.now() })
      this.bills.push({ ...bill, id: uuidv4() })
    }
  }
})

// != signifie "différent de en valeur "
// == signifie "égal à en valeur "
// === signifie "égal à en valeur et en type "
