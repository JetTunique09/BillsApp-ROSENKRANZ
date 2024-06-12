import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      todos: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Etendre le linge", done: false },
        { id: 3, text: "Promener le chien", done: false },
        { id: 4, text: "Demissionner", done: true },
        { id: 5, text: "Quitter le pays", done: false },
      ],
      count: 0,
      text: "",
      bgColor: "white",
      // currentImage: "images/img1.jpg",
      // img1: "images/img1.jpg",
      // img2: "images/img2.jpg",
      image: "https://picsum.photos/200/300?image=0",
      cartCount: 0,
    };
  },
  methods: {
    onDeleteTodo(id) {
      console.log("delete", id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onEditTodo(id) {
      console.log("edit", id);
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
    onClickBtn() {
      //dans une méthode on doit faire référence aux variables de data avec this.
      this.count++;
    },
    changeImage(newSrc) {
      this.image = newSrc;
    },
  },
}).mount("#app");
