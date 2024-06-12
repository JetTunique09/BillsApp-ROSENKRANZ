<!-- affichage du nombre des produits dans le panier, 
 vous devez injecter la donnée du compteur panier ici -->
<template>
  <!-- la card qui vas contenir le panier -->
  <div class="card">
    <!-- Le titre et la quantité de produit -->
    <div class="card-header">Panier 🧺 ({{ qty }})</div>
    <div class="card-body">
      <button @click="$emit('onEmptyCart')" class="btn">Vider le panier 🚮</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // propriété qui contient le nombre de produits dans le panier, déclarer dans le composant parent App.vue``
    // il recupère le nombre par la propriété cartQty décalérée dans le composant App.vue
    qty: {
      type: Number,
      default: 0
    }
  },
  // écouteur d'événement pour vider le panier, déclarer dans le composant parent App.vue
  emits: ['onEmptyCart']
}
</script>

<style scoped></style>
