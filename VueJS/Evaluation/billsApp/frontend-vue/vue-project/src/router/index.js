import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkActiveClass: 'active text-primary border-bottom border-primary',
  linkExactActiveClass: 'active text-primary border-bottom border-primary border-3',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bills',
      name: 'bills',
      component: () => import('../views/BillsView.vue')
    },
    // l'ordre de déclaration des routes est important,
    // car c'est l'ordre dans lequel les routes sont testées
    // il faut toujours déclarer les routes les plus générales en premier, et de plus en plus précis
    {
      path: '/edit-bill',
      redirect: '/create-bill'
    },
    // ici on déclare une route dynamique avec un paramètre :id
    {
      path: '/edit-bill/:id',
      props: true, //sert à récupérer les paramètres sous la forme de props dans le composant de la vue
      name: 'edit-bill',
      component: () => import('../views/EditBillView2.vue')
    },
    {
      path: '/create-bill/',
      name: 'create-bill',
      component: () => import('../views/CreateBillView.vue')
    },
    {
      path: '/clients/',
      name: 'clients',
      component: () => import('../views/ClientsView.vue')
    },
    {
      path: '/edit-client',
      redirect: '/create-client'
    },
    // ici on déclare une route dynamique avec un paramètre :id
    {
      path: '/edit-client/:id',
      props: true, //sert à récupérer les paramètres sous la forme de props dans le composant de la vue
      name: 'edit-client',
      component: () => import('../views/EditClientView.vue')
    },
    {
      path: '/create-client/',
      name: 'create-client',
      component: () => import('../views/CreateClientView.vue')
    }
  ]
})

export default router
