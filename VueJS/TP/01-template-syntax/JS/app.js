//le script doit etre declarer en module avec type = "module" pour que l'import fonctionne

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        title: 'Hello Vue!',
        name: 'Doe',
        firstname: 'John'
      }
    }
  }).mount('#app')