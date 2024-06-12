<template>
  <div>
    <div class="row align-items-center">
      <div class="col-8">
        <h4 @click="toggleBillsList" style="cursor: pointer">
          <font-awesome-icon :icon="showBills ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']" />
          Liste des factures
        </h4>
      </div>
      <div class="col-2"></div>
      <div class="col-2">
        <button type="button" class="btn btn-outline-primary">
          <font-awesome-icon :icon="['fas', 'circle-plus']" />
          Ajouter une facture
        </button>
      </div>
    </div>

    <div v-if="showBills" class="bills-list mt-3 p-3">
      <!-- Ici, vous afficherez la liste des factures -->
      <div v-for="bill in bills" :key="bill.id" class="bill-item">
        {{ bill.billnum + '  -  ' + bill.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { bills } from '@/seeds/bills.js'

export default {
  data() {
    return {
      bills,
      showBills: false
    }
  },
  methods: {
    toggleBillsList() {
      this.showBills = !this.showBills
    }
  }
}
</script>

<style scoped>
.btn {
  font-size: small;
}
.bills-list {
  border: 1px solid grey;
  border-radius: 8px;
}
</style>
