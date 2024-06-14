<template>
  <div class="container py-4">
    <PageHeader />

    <div class="border p-4 rounded-bottom shadow bg-white">
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
  },
  async mounted() {
    const datas = await this.$http.get('/bills')
    console.log(datas)
  }
}
</script>

<style scoped></style>
