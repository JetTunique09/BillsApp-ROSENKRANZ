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
      <BoardCard> </BoardCard>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { mapState, mapActions } from 'pinia'
import BoardCard from '@/components/Dashboard/BoardCard.vue'

export default {
  components: {
    BoardCard
  },
  data() {
    return {
      show: true
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
