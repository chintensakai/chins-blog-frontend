import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'MainLayout',
    component: () => import('@/views/MainPage.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
