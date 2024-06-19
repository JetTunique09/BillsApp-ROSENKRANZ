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

        <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-3">
            <RouterLink class="nav-link" aria-current="page" to="/">
              <i class="fa-solid fa-house me-2"></i>Accueil</RouterLink
            >
          </li>
          <li class="nav-item ms-3">
            <RouterLink class="nav-link" aria-current="page" to="/bills">
              <i class="fa-solid fa-file me-2"></i>Factures</RouterLink
            >
          </li>
          <li class="nav-item ms-3">
            <RouterLink class="nav-link" aria-current="page" to="/clients">
              <i class="fa-solid fa-users me-2"></i>Clients</RouterLink
            >
          </li>
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">A propos</RouterLink>
          </li> -->
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
