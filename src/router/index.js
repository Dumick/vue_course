import { createRouter, createWebHistory } from 'vue-router'

import catalog from '@/views/Catalog.vue'
import product from '@/views/Product.vue'
import cart from '@/views/Cart.vue'
import about from '@/views/About.vue'
import e404 from '@/views/404.vue'

const routes = [
  {
    name: 'catalog',
    path: '/',
    component: catalog
  },
  {
    name: 'product',
    path: '/product/:id',
    component: product
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart
  },
  {
    name: 'about',
    path: '/about',
    component: about
  },
  {
    name: 404,
    path: '/404',
    component: e404,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
