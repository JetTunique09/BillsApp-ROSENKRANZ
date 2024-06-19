<template>
  <main>
    <div class="row border-bottom pb-3 mb-3 mt-4">
      <div class="col">
        <h1 class="h3" @click="toggleDashboard">
          <i :class="showBills ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'" class="me-2"></i
          >Dashboard
        </h1>
      </div>
      <div class="col text-end">
        <router-link to="/create-bill" class="btn btn-outline-primary">
          <i class="fa-solid fa-plus-circle me-2"></i>
          Ajouter une facture
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      show: false
    }
  },
  //recupère en lecture la donnée et l'injecte dans le composant avec le même nom de la variable dans le store
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  },
  toggleDashboard() {
    this.show = !this.show
  }
}
</script>
