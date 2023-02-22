import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    { 
      path: '/:pathMatch(.*)', 
      name: 'bad-not-found', 
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('../views/admin/DashboardView.vue'),
      // 子路由 以array型式開始
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        }
      ]
    }
  ]
})

export default router
