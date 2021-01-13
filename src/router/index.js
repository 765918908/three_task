import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/OpenGov',
    name: 'OpenGov',
    component: () => import('../views/OpenGov.vue')
  },
  {
    path: '/OpenAffairs',
    name: 'OpenAffairs',
    component: () => import('../views/OpenAffairs.vue')
  },
  {
    path: '/OpenFinan',
    name: 'OpenFinan',
    component: () => import('../views/OpenFinan.vue')
  },
  {
    path: '/BusinessGuide',
    name: 'BusinessGuide',
    component: () => import('../views/BusinessGuide.vue')
  },
  {
    path: '/Warn',
    name: 'Warn',
    component: () => import('../views/Warn.vue')
  }

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
