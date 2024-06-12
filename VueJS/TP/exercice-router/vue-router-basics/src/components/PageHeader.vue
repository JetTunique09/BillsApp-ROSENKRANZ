<template>
  <header class="mb-5">
    <nav class="navbar navbar-expand-lg px-2">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">
          <font-awesome-icon :icon="['fas', 'wallet']" class="me-2" />
          Factures</RouterLink
        >

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">
              <font-awesome-icon :icon="['fas', 'house']" />
              Accueil</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/bills">
              <font-awesome-icon :icon="['far', 'folder-open']" />
              Factures</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/edit-bill">
              <font-awesome-icon :icon="['fas', 'user-group']" />
              Clients</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/create-bill">
              <font-awesome-icon :icon="['fas', 'circle-info']" />
              A propos</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
// imort du composant de lien depuis vue-router
import { RouterLink } from 'vue-router'

export default {
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.navbar {
  background-color: #e3f2fd;
}
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
</style>
