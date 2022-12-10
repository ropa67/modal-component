import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import HomeModal from '../views/HomeModal.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeModal
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
