<template>
  <div>
    <!-- titre et bouton ajouter -->
    <div class="row border-bottom pb-3 mb-3">
      <div class="col">
        <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Liste des factures</h1>
      </div>
      <div class="col text-end">
        <button class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2" />
          Ajouter une facture
        </button>
      </div>
    </div>

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
    <pre>
      {{ bills }}
    </pre>

    <!-- on peut passer des paramètres dans les router-links : -->

    <!-- <RouterLink :to="`/edit-bill/${bills[0].id}`">Lien test vers la bill avec l'id 1</RouterLink>
    <RouterLink to="/edit-bill/3">Lien test vers la bill avec l'id 1</RouterLink>
    <RouterLink
      :to="{
        name: 'edit-bill',
        params: {
          id: 2
        }
      }"
      >Lien test vers la bill avec l'id 1</RouterLink
    > -->
  </div>
</template>

<script>
import BillTableRow from '@/components/TableList/BillTableRow.vue'
import TableList from '@/components/TableList/TableList.vue'
import { bills } from '@/seeds/bills.js'
export default {
  components: {
    TableList,
    BillTableRow
  },
  data() {
    return {
      bills
    }
  },
  methods: {
    onEditBill(bill) {
      console.log('edit bill with id: ', bill.id)
      // je change de page programmatiquement avec le $router
      this.$router.push({
        name: 'edit-bill',
        params: {
          id: bill.id
        }
      })
      // autre syntaxe en utilisant le path (dynamique)
      // this.$router.push({ path: `/edit-bill/${bill.id}`  })
    },
    onDeleteBill(bill) {
      // on recherche l'index de la facture à supprimer, et on retourne un nouveau tableau de bills sans celle-ci
      this.bills = this.bills.filter((b) => b.id !== bill.id)
    }
  }
}
</script>

<style scoped></style>
