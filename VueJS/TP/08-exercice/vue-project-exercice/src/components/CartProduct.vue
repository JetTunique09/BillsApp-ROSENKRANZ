<!-- composant modèle pour afficher un produit :
  https://getbootstrap.com/docs/5.0/components/card/ -->
<template>
  <!-- on crée le modèle de carte pour nos produits -->
  <div class="card product-item mb-2">
    <!-- on met l'image tout en haut de la card, elle est séléctionner en fonction de l'objet variant -->
    <img
      :src="item.variants[selectedImage].variantImage"
      class="card-img-top"
      alt="image produit"
    />
    <!-- on crée les divisions pour les variantes de couleur et la quantité de stock -->
    <div class="card-body">
      <div class="d-flex gap-2 mb-2">
        <div
          class="variant-item"
          v-for="(variant, index) in item.variants"
          :key="variant.variantId"
          @click="selectedImage = index"
        >
          <!-- pour chaque card des divisons défini plus bas en style, 
         ou les parametre de couleur de fond correspondront à la couleur de chaque variante selon le produit donc -->
          <div class="color-variant" :style="{ backgroundColor: variant.variantColor }" />
          <!-- afficher la quantité de stock en allant récupérer l'information pour chaque produit -->
          <p>Stock : {{ variant.variantQuantity }}</p>
        </div>
      </div>
      <!-- afficher le nom du produit et la marque -->
      <h2 class="mb-0">{{ item.product }}</h2>
      <p>Marque: {{ item.brand }}</p>
      <!-- afficher la description du produit, comme c'est un tableau plusieurs donnée a afficher on fait une boucle -->
      <ul>
        <li v-for="(detail, index) in item.details" :key="index + '-' + detail">{{ detail }}</li>
      </ul>
    </div>
    <!-- bouton pour ajouter au panier le produit -->
    <div class="card-footer">
      <button @click="$emit('addToCart')" class="btn btn-primary">Ajouter au panier</button>
    </div>
  </div>
</template>

<script>
export default {
  // définition des propriétés attendues pour ce composant
  // on a un objet item qui contient toutes les informations du produit
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  // définition des évènements émis par ce composant
  // on émet l'évènement 'addToCart' lorsque l'utilisateur clique sur le bouton
  // on définit aussi une propriété pour stocker l'index de la variante sélectionnée
  // lors du montage du composant (mounted)
  emits: ['addToCart'],
  data() {
    return {
      selectedImage: 0
    }
  },
  // lorsque la card est "monté", on définit la variante sélectionnée à celle du produit donnée
  mounted() {
    this.selectedImage = this.item.selectedVariant
  }
}
</script>

<!-- style scindé pour s'appliquer uniquement à ce composant ci -->
<style scoped>
/* la largeur qu'auront les items de variante (modèle) */
.variant-item {
  width: 60px;
}
/* de même pour la couleur mais ensuite on définit plus haut que la couleur elle même est propre à sa variante */
.color-variant {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  cursor: pointer;
}
/* détail : changement de la couleur de bordure quand la souris focus dessus */
.color-variant:hover,
.color-variant:focus {
  border-color: red;
}
.card {
  max-width: 320px;
}
</style>
