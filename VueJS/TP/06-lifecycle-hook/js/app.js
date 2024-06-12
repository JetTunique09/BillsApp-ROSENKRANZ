import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      count: 0,
      x: 0,
      y: 0,
      mouseListener: null,
    };
  },
  //les computed properties sont des fonctions qui retournent quelque chose (string, number, array, boolean)
  // elles sont appelé comme des variables ici la 1ère fullName et non comme une méthode fullName()
  //de plus une computed est automatiquement recalculé lorsque les variables sont modifiées
  computed: {},
  //ceci est notre premier hook ⬇️ ils sont définis dans une fonction appelé automatiquement lordque l'event est déclenché,
  //voir la liste des hoods disponible :
  mounted() {
    console.log("App mounted!", this.count);
    this.mouseListener = document.addEventListener(
      "mousemove",
      this.onMouseMove
    );
  },
  updated() {
    console.log("App updated!", this.count);
  },
  unmounted() {
    console.log("App unmounted!", this.count);
    document.removeEventListener("mousemove", this.onMouseMove);
    this.mouseListener = null;
  },
  methods: {
    onMouseMove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
  },
}).mount("#app");
