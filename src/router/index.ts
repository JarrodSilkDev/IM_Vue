// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { computedAppRoutes } from '@/store/appRoutes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...computedAppRoutes],
})

export default router
