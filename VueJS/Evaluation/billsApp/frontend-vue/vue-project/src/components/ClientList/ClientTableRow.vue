<template>
  <!-- tr pour tableau row  -->
  <!-- @click="$emit('edit', client)"
   v-bind:style="{ backgroundColor: bgColor }"
    @mouseout="hoverOut()"
    @mouseover="hoverIn()"
     -->
  <tr>
    <!-- sur cette ligne cette tr on aura plusieurs infos, respectivement dans l'ordre des en tete crée  -->
    <td class="align-middle"><i class="fa-regular fa-user me-2"></i>{{ clientName }}</td>
    <td class="align-middle">{{ client.companyName }}</td>
    <td class="align-middle text-end">{{ formattedDate }}</td>
    <td class="align-middle d-flex gap-2 justify-content-end align-items-center">
      <!-- on a un bouton permettant la modification et la suppression de chaque bill -->
      <button @click="$emit('delete', client)" class="btn btn-outline-danger">
        <i class="fa-solid fa-trash me-2"></i>Supprimer
      </button>
      <button @click="$emit('edit', client)" class="btn btn-outline-info">
        <i class="fa-solid fa-pen me-2"></i>Editer
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  // définition des propriétés attendues pour ce composant ainsi que les événements qu'il émet
  //client est un objet contenant les informations d'un client à chaque fois, c'est le constructeur de chaque ligne de la table
  props: {
    client: {
      type: Object,
      required: true
    }
  },
  emits: ['delete', 'edit'],
  data() {
    return {}
  },
  computed: {
    clientName() {
      return this.client.firstName + ' ' + this.client.lastName
    },
    formattedDate() {
      return this.formatDate(new Date(this.client.addDate))
    }
  },
  methods: {
    formatDate(date) {
      const options = { day: '2-digit', month: 'long', year: 'numeric' }
      return date.toLocaleDateString('fr-FR', options)
    }
  }
}
</script>

<style scoped></style>
