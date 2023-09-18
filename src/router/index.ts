import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/Home',
    component: () => import ('../views/HomePage.vue')
  },
  {
    path: '/Foods',
    component: () => import ('../views/OurFoodPage.vue')
  },
  {
    path: '/Foods/:id',
    component: () => import ('../views/SelectedPage.vue')
  },
  {
    path: '/Selected',
    component: () => import ('../views/SelectedPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
