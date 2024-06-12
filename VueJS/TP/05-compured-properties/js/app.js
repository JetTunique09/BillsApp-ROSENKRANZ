import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      cart: 0,
      firstname: "John",
      lastname: "Doe",
    };
  },
  //les computed properties sont des fonctions qui retournent quelque chose (string, number, array, boolean)
  // elles sont appelé comme des variables ici la 1ère fullName et non comme une méthode fullName()
  //de plus une computed est automatiquement recalculé lorsque les variables sont modifiées
  computed: {
    fullName() {
      return this.firstname + " " + this.lastname;
    },
    outofStock() {
      return this.cart >= 10;
    },
    // on peut appeler d'autre computed dans une computed...
    superHero() {
      return this.fullName === "Peter Parker";
    },
  },
  methods: {
    getfullName() {
      return this.firstname + " " + this.lastname;
    },
  },
}).mount("#app");
