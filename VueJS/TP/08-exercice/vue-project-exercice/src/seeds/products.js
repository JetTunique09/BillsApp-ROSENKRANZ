export const products = [
  {
    id: 1,
    brand: 'Adidas',
    product: 'Socks 🧦',
    details: ['80% coton', '20% polyester', 'Genre mixte'],
    // ajout de l'index sélectionné par défaut
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://picsum.photos/400/400?image=1',
        variantQuantity: 30
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://picsum.photos/400/400?image=2',
        variantQuantity: 2
      },
      {
        variantId: 2236,
        variantColor: 'red',
        variantImage: 'https://picsum.photos/400/400?image=3',
        variantQuantity: 9
      }
    ]
  },
  {
    id: 2,
    brand: 'Nike',
    product: 'Shoes 👟',
    details: ['80% licra', '20% polyester', 'Genre mixte'],
    // ajout de l'index sélectionné par défaut
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://picsum.photos/400/400?image=1',
        variantQuantity: 220
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://picsum.photos/400/400?image=2',
        variantQuantity: 5
      },
      {
        variantId: 2236,
        variantColor: 'red',
        variantImage: 'https://picsum.photos/400/400?image=3',
        variantQuantity: 80
      }
    ]
  },
  {
    id: 3,
    brand: 'Ralph Lauren',
    product: 'Polo 👕 ',
    details: ['60% coton', '20% polyester', 'Genre mixte'],
    // ajout de l'index sélectionné par défaut
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://picsum.photos/400/400?image=1',
        variantQuantity: 21
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://picsum.photos/400/400?image=2',
        variantQuantity: 7
      },
      {
        variantId: 2236,
        variantColor: 'red',
        variantImage: 'https://picsum.photos/400/400?image=3',
        variantQuantity: 10
      }
    ]
  }
]
