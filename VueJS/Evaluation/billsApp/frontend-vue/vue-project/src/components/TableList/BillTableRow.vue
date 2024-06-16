<!-- le modèle le component utiliser pour chaque ligne -->
<template>
  <!-- tr pour tableau row donc 1 ligne  -->
  <tr>
    <!-- sur cette ligne cette tr on aura plusieurs infos, respectivement dans l'ordre des en tete crée  -->
    <td class="align-middle">{{ bill.date }}</td>
    <td class="align-middle">{{ bill.description }}</td>
    <td class="align-middle">{{ clientName }}</td>
    <td class="align-middle text-end">{{ bill.totalHT.toFixed(2) }} HT</td>
    <td class="align-middle text-end">{{ bill.totalTTC.toFixed(2) }} TTC</td>
    <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
      <!-- on a un bouton permettant la modification et la suppression de chaque bill -->
      <button @click="$emit('delete', bill)" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash me-2"></i>Supprimer
      </button>
      <button @click="$emit('edit', bill)" class="btn btn-outline-info">
        <i class="fa-solid fa-pen me-2"></i>Editer
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  // définition des propriétés attendues pour ce composant ainsi que les éventements qu'il émet
  //bill est un objet contenant les informations d'une facture à chaque fois, c'est le constructeur de chaque ligne de la table
  props: {
    bill: {
      type: Object,
      required: true
    }
  },
  emits: ['delete', 'edit'],
  // création d'une propriété calculée en fonction du nom et prenom de la facture,
  //renvoie le nom du client après assemblage
  computed: {
    clientName() {
      return this.bill.client.firstName + ' ' + this.bill.client.lastName
    }
  },
  methods: {}
}
</script>

<style scoped></style>
