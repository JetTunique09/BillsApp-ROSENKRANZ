<!-- le modèle le component utiliser pour chaque ligne -->
<template>
  <!-- tr pour tableau row donc 1 ligne  -->
  <tr>
    <!-- sur cette ligne cette tr on aura plusieurs infos, respectivement dans l'ordre des en tete crée  -->
    <td class="align-middle"><i class="fa-regular fa-file me-2"></i>{{ bill.date }}</td>
    <td v-if="!isHomeView" class="align-middle">{{ bill.description }}</td>
    <td class="align-middle">{{ clientName }}</td>
    <td class="align-middle text-end">{{ bill.totalTTC.toFixed(2) }} TTC</td>
    <td v-if="!isHomeView" class="align-middle text-end">
      <i
        :class="
          bill.statut
            ? 'fa-solid fa-circle-check text-success'
            : 'fa-regular fa-hourglass-half text-warning'
        "
      ></i>
    </td>
    <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
      <!-- on a un bouton permettant la modification et la suppression de chaque bill -->
      <button v-if="!isHomeView" @click="$emit('delete', bill)" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash"></i>
      </button>
      <button @click="$emit('edit', bill)" class="btn btn-outline-info">
        <i class="fa-solid fa-pen"></i>
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
    },
    showStatus: {
      type: Boolean,
      default: true
    }
  },
  emits: ['delete', 'edit'],
  // création d'une propriété calculée en fonction du nom et prenom de la facture,
  //renvoie le nom du client après assemblage
  computed: {
    clientName() {
      return this.bill.client.firstName + ' ' + this.bill.client.lastName
    },
    isHomeView() {
      return this.$route.name === 'home'
    }
  }
}
</script>

<style scoped>
.fa-hourglass-half {
  color: #fd7e14;
}
</style>
