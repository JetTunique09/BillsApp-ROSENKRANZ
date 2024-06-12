<template>
  <div class="container py-5">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Exercice</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="App.vue">TodoList</a>
            <!-- <a class="nav-link active" aria-current="page" href="Tess-beste.vue">TessPage</a> -->
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- gestion créer une TODO liste -->
    <ul id="todos" class="list-group">
      <!-- structure référence à créer 
      <li class="list-group-item">[case à cocher readonly] Titre de la todo (+classe barrer si achevée: "text-decoration-line-through")</li> 
      -->
      <!-- Ajout d'un formulaire pour ajouter des tâches -->
      <form class="mt-4" @submit.prevent="addTodo">
        <div class="input-group d-flex">
          <input
            type="text"
            class="form-control"
            id="todo-text"
            v-model="newTodoText"
            placeholder="Quelle tâche?"
          />
          <button type="submit" class="btnAdd btn-lg btn">➕</button>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="todo-done" v-model="newTodoDone" />
          <label class="form-check-label" for="todo-done">Achevée</label>
        </div>
      </form>
      <br />
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex align-items-center">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            aria-label="done/undone"
            :checked="todo.done"
            @click="toggleDone(todo)"
          />
        </div>
        <div
          v-if="!todo.isEditing"
          :class="{ 'text-decoration-line-through': todo.done }"
          class="me-auto"
        >
          {{ todo.text }}
        </div>
        <input
          v-else
          type="text"
          v-model="todo.text"
          @keyup.enter="saveEdit(todo)"
          class="form-control me-auto"
        />
        <button v-if="!todo.isEditing" class="btn btn-danger me-1" @click="onDeleteTodo(todo.id)">
          Supprimer 🗑️
        </button>
        <button v-if="!todo.isEditing" class="btn btn-primary" @click="onEditTodo(todo.id)">
          Editer 📝
        </button>
        <button v-if="todo.isEditing" class="btn btn-success" @click="saveEdit(todo)">Save</button>
      </li>
    </ul>
    <TessBeste></TessBeste>
  </div>
</template>

<script>
export default {
  // il faut déclarer le composant en tant que dépendance
  components: {},
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn JavaScript',
          done: false,
          isEditing: false
        },
        {
          id: 2,
          text: 'Learn Vue',
          done: true,
          isEditing: false
        },
        {
          id: 3,
          text: 'Build something awesome',
          done: false,
          isEditing: false
        },
        {
          id: 4,
          text: 'Profit',
          done: false,
          isEditing: false
        },
        {
          id: 5,
          text: 'Profit',
          done: false,
          isEditing: false
        }
      ],
      newTodoText: '',
      newTodoDone: false
    }
  },
  methods: {
    toggleDone(todo) {
      todo.done = !todo.done
    },
    onDeleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    onEditTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.isEditing = true
    },
    saveEdit(todo) {
      todo.isEditing = false
    },
    addTodo() {
      const newTodo = {
        id: Date.now(),
        text: this.newTodoText,
        done: this.newTodoDone,
        isEditing: false
      }
      this.todos.push(newTodo)
      this.newTodoText = ''
      this.newTodoDone = false
    }
  }
}
</script>

<style>
.navbar {
  background-color: #e3f2fd;
}

.btnAdd {
  background-color: #e3f2fd;
  border-radius: 20%;
}
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
</style>
