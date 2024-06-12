<template>
  <PageHeader />
  <div class="container py-4">
    <div>
      <!-- <RouterLink to="/bills" class="btn btn-primary mb-3">Voir les factures</RouterLink> -->
    </div>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader,
    // RouterLink,
    RouterView
  }
}
</script>

<style scoped></style>
