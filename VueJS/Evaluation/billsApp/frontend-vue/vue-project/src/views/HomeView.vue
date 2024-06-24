<template>
  <main>
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col-4">
        <h1 class="h3" @click="toggleDashboard">
          <i :class="show ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'" class="me-2"></i
          >Dashboard
        </h1>
      </div>
      <div class="col-6 text-end">
        <router-link to="/create-bill" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter une facture
        </router-link>
      </div>
      <div class="col-2 text-end">
        <router-link to="/create-client" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter un client
        </router-link>
      </div>
    </div>

    <div v-if="show" class="pt-5 mt-4 ms-4 ps-4">
      <div class="row">
        <div class="col-5">
          <BoardCard> </BoardCard>
        </div>
        <div class="col-7">
          <TableList>
            <BillTableRow
              v-for="bill in bills"
              :key="bill.id"
              :bill="bill"
              :showStatus="false"
              @edit="onEditBill($event)"
            />
          </TableList>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { useBillStore } from '@/stores/bill.js'
import { mapState, mapActions } from 'pinia'
import BoardCard from '@/components/Dashboard/BoardCard.vue'
import BillTableRow from '@/components/TableList/BillTableRow.vue'
import TableList from '@/components/TableList/TableList.vue'

export default {
  components: {
    BoardCard,
    TableList,
    BillTableRow
  },
  data() {
    return {
      show: true
    }
  },
  //recupère en lecture la donnée et l'injecte dans le composant avec le même nom de la variable dans le store
  computed: {
    ...mapState(useCounterStore, ['count']),
    ...mapState(useBillStore, ['bills'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment']),
    ...mapActions(useBillStore, ['onDeleteBill', 'getAllBills']),
    onEditBill(bill) {
      console.log('edit bill with id: ', bill.id)
      //this.setBill(bill.id); // Assurez-vous que la facture est définie dans le store
      //redirection de page
      this.$router.push({
        name: 'edit-bill',
        params: {
          id: bill.id
        }
      })
    }
  },
  toggleDashboard() {
    this.show = !this.show
  }
}
</script>
