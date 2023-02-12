import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'Home',
    component: () => import('~/views/home-page.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('~/views/about-page.vue'),
  },
]

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHashHistory(),
})
