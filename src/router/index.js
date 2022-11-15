import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'battle',
      component: () => import('@/views/BattleView.vue')
    },
  ]
})

export default router
