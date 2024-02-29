import { createRouter, createWebHistory } from 'vue-router'
import View from '../views/pages/View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: View
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pages/View.vue')
    },
    {
      path: '/apps',
      name: 'apps',
      redirect: '/apps/list',
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/pages/View.vue')
        }
      ]
    }
  ]
})

export default router
