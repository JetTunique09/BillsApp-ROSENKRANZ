<template>
  <div>
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3" @click="toggleClientsList">
          <i
            :class="showClients ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'"
            class="me-2"
          ></i
          >Liste des clients
        </h1>
      </div>
      <div class="col text-end">
        <router-link to="/create-client" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter un client
        </router-link>
      </div>
    </div>

    <div v-if="showClients">
      <TableauList>
        <ClientTableRow
          v-for="client in clients"
          :key="client.idclient"
          :client="client"
          @edit="onEditClient($event)"
          @delete="onDeleteClient($event)"
        />
      </TableauList>
    </div>
  </div>
</template>

<script>
import ClientTableRow from '@/components/ClientList/ClientTableRow.vue'
import TableauList from '@/components/ClientList/TableauList.vue'

// Import du store
import { useClientStore } from '@/stores/clients.js'
// Import du mapState, mapActions et mapWritableState du plugin Pinia
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    TableauList,
    ClientTableRow
  },
  data() {
    return {
      showClients: true
    }
  },
  computed: {
    ...mapState(useClientStore, ['clients'])
  },
  async mounted() {
    await this.getAllClients()
  },
  methods: {
    ...mapActions(useClientStore, ['onDeleteClient', 'setClient', 'getAllClients']),
    onEditClient(client) {
      console.log('edit client with id: ', client.idclient)
      //this.setClient(client.idclient)
      this.$router.push({
        name: 'edit-client',
        params: {
          id: client.idclient
        }
      })
    },
    toggleClientsList() {
      this.showClients = !this.showClients
    }
  }
}
</script>

<style scoped></style>
