<template>
  <div>
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3" @click="toggleBillsList">
          <i :class="showBills ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'" class="me-2"></i
          >Liste des factures
        </h1>
      </div>
      <div class="col text-end">
        <router-link to="/create-bill" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter une facture
        </router-link>
      </div>
    </div>

    <div v-if="showBills">
      <TableList>
        <!-- exemple pour personnaliser les th du tableau TableList : -->
        <!-- <template #thead>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
          <th>test</th>
        </template> -->
        <BillTableRow
          v-for="bill in bills"
          :key="bill.id"
          :bill="bill"
          @edit="onEditBill($event)"
          @delete="onDeleteBill($event)"
        />
      </TableList>
    </div>
  </div>
  <!-- <pre> {{ bills }}</pre> -->
</template>

<script>
import BillTableRow from '@/components/TableList/BillTableRow.vue'
import TableList from '@/components/TableList/TableList.vue'
// Import du store
import { useBillStore } from '@/stores/bill.js'
// Import du mapState, mapActions et mapWritableState du plugin Pinia
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    TableList,
    BillTableRow
  },
  data() {
    return {
      showBills: true
    }
  },
  computed: {
    ...mapState(useBillStore, ['bills'])
    //...mapWritableState(useBillStore, ['bill']),
    //...mapStores(useBillStore)
  },
  async mounted() {
    //récupère les données de l'API
    await this.getAllBills()
  },
  methods: {
    ...mapActions(useBillStore, ['onDeleteBill', 'getAllBills']),
    onEditBill(bill) {
      console.log('edit bill with id: ', bill.id)
      //redirection de page
      this.$router.push({
        name: 'edit-bill',
        params: {
          id: bill.id
        }
      })
    },
    toggleBillsList() {
      this.showBills = !this.showBills
    }
  }
}
</script>

<style scoped></style>
