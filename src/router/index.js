import { createRouter, createWebHistory } from 'vue-router'
import View from '../views/pages/View.vue'
import Apps from "@/views/layout/Apps.vue";
import Pages from "@/views/layout/Pages.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: View
    },
    {
      path: '/pages',
      name: 'pages',
      redirect: '/pages/crm-analytics',
      component: Pages,
      children: [
        {
          path: 'crm-analytics',
          name: 'crm-analytics',
          component: () => import('../views/pages/View.vue')
        }
      ]
    },
    {
      path: '/apps',
      name: 'apps',
      redirect: '/apps/list',
      component: Apps,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/apps/List.vue')
        }
      ]
    }
  ]
})

export default router
