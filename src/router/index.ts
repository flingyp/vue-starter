import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'HomePage',
    component: () => import('~/views/home-page.vue'),
  },
]

export const router = createRouter({
  routes,
  strict: true,
  history: createWebHashHistory(),
})
