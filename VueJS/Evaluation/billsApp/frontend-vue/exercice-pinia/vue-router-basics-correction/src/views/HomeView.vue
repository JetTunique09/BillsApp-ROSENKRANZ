<template>
  <main>
    <h1>Home</h1>
    <p>{{ toto }}</p>
    <p>{{ count }}</p>
    <p>
      <button class="btn btn-primary" @click="increment">+1</button>
    </p>
  </main>
</template>

<script>
import { useCounterStore } from '@/stores/counter.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      toto: 'test'
    }
  },
  //recupère en lecture la donnée et l'injecte dans le composant avec le même nom de la variable dans le store
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
}
</script>
