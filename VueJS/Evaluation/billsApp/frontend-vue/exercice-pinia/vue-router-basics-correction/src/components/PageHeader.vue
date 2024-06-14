<template>
  <header class="shadow">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid">
        <RouterLink
          class="navbar-brand text-secondary"
          style="font-size: 30px"
          activeClass=""
          exactActiveClass=""
          to="/"
        >
          <i class="fa-solid fa-wallet me-3 ms-2"></i>Factures
        </RouterLink>

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/bills">Bills</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/clients">Clients</RouterLink>
          </li> -->
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/create-bill">Create</RouterLink>
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

<style scoped></style>
