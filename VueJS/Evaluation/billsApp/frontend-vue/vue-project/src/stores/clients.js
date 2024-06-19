import { clients } from '@/seeds/clients.js'
import { defineStore } from 'pinia'
//libraries uuid avec npm install uuid
// import { v4 as uuidv4 } from 'uuid'

export const useClientStore = defineStore('client', {
  state: () => ({
    clients,
    client: null
  }),
  getters: {},
  actions: {
    // récupère les données depuis l'API : renvoie la liste des clients
    async getAllClients() {
      const response = await this.$http.get('/clients')
      this.clients = response.data
    },
    //recup du profil client avec l'id dans le store au moment de l'édition
    async setClient(idclient) {
      const response = await this.$http.get('/clients/' + idclient)
      this.client = response.data
    },
    // suppression du profil client en fonction de l'id, recharge la liste des clients
    async onDeleteClient(client) {
      const response = await this.$http.delete('/clients/' + client.idclient)
      console.log(response.data)
      await this.getAllClients()
    },
    //recherche le profil client correspondant dans le store, et enregistre les modifications
    async onUpdateClient(client) {
      const response = await this.$http.patch('/clients/' + client.idclient, client)
      console.log(response.data)
      this.client = null
      await this.getAllClients()
    },
    //ajouter un nouveau client
    async onAddClient(client) {
      // this.clients.push({ ...client, idclient: uuidv4() })
      const response = await this.$http.post('/clients', client)
      console.log(response.data)
      await this.getAllClients()
    }
  }
})

// != signifie "différent de en valeur "
// == signifie "égal à en valeur "
// === signifie "égal à en valeur et en type "
