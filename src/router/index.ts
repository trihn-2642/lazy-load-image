import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles',
      //lazy load
      component: () => import('@/pages/ArticlesPage.vue')
    }
  ]
})

export default router
