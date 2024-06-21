<!-- Composant de l'en tête -->
<template>
  <table class="table">
    <thead>
      <tr>
        <!-- pour personnaliser éventuellement l'entête du tableau, on pourra utiliser le slot thead avec <template #thead></template> -->
        <slot name="thead">
          <th>Date</th>
          <th>Description</th>
          <th>Client</th>
          <th class="text-end">Prix TTC</th>
          <th class="text-end">Statut</th>
          <th class="text-end">Actions</th>
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
export default {}
</script>

<style scoped></style>
