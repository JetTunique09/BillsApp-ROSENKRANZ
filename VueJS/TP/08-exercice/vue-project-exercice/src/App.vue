<template>
  <main class="container py-4">
    <h3>Exercice de gestion des composants - Sites de Ventes 🛍️</h3>
    <br />
    <!-- Utilise une disposition Bootstrap pour organiser les éléments en lignes et colonnes. -->
    <div class="row">
      <div class="col-10 d-flex gap-2 flex-wrap">
        <!-- écoute l'événement addToCart pour incrémenter la quantité du panier -->
        <!-- une boucle v-for pour parcourir la liste des produits, pour chacun 
         on aura un composant CartProduct dans lequel on injecte la donnée product,
         qui sera récupérée à l'intérieur du composant sous la propriété 'item' -->
        <CartProduct
          @addToCart="cartQty++"
          v-for="product in products"
          :key="product.id"
          :item="product"
        />
      </div>

      <div class="col-2 cart-sticky">
        <!-- on affiche le composant CartDisplay, 
         qui affiche la quantité de produit dans le panier -->
        <!-- écoute événement onEmptyCart pour réinitialiser la quantité du panier à 0 si le panier est vider -->
        <CartDisplay class="cart-sticky-card" @onEmptyCart="cartQty = 0" :qty="cartQty" />
      </div>
    </div>
  </main>
</template>

<script>
// on importe les composants utilisés dans ce fichier
import CartDisplay from '@/components/CartDisplay.vue'
import CartProduct from '@/components/CartProduct.vue'
// on importe la liste des produits depuis le fichier js products.js
import { products } from '@/seeds/products.js'

// on déclare les composants importée et les données nécessaires au fonctionnement de celui-ci
export default {
  components: {
    CartProduct,
    CartDisplay
  },
  data() {
    return {
      // on initialise la quantité du panier à 0
      cartQty: 0,
      // c'est comme si on écrivait products: products, products vient de la constante exporté depuis @/seeds/products
      products
    }
  }
}
</script>

<!-- style scindé pour s'appliquer uniquement à ce composant ci -->
<style scoped>
/* définit une position relative pour le conteneur du panier */
.cart-sticky {
  position: relative;
}
/* position fixe (sticky) du panier afin qu'il reste visible lors du défilement de la page */
.cart-sticky-card {
  position: sticky;
  top: 1rem;
  left: 0;
  right: 0;
}
</style>
