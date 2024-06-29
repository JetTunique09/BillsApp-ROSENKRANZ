<!-- Composant de l'en tête -->
<template>
  <table class="table">
    <thead>
      <tr class="entete">
        <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
        <slot name="thead">
          <th>Date</th>
          <th v-if="!isHomeView">Description</th>
          <th>Client</th>
          <th class="text-end">Prix TTC</th>
          <th v-if="!isHomeView" class="text-end">Statut</th>
          <th v-if="!isHomeView" class="text-end">Actions</th>
        </slot>
      </tr>
    </thead>
    <tbody>
      <!-- affichage des lignes de tableau APPEL de BillTableRow.vue dans composant parents -->
      <!-- Ce slot permet au composant parent (BillsView.vue) d'insérer les lignes de factures (BillTableRow)
         directement dans le tableau. -->
      <slot />
    </tbody>
  </table>
</template>

<script>
export default {
  computed: {
    isHomeView() {
      return this.$route.name === 'home'
    }
  }
}
</script>
<style scoped>
th {
  color: #a1a1a1;
  font-weight: normal;
}
</style>
