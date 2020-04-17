import Vue from 'vue'
import VueRouter from 'vue-router'
import landingPage from '../views/LandingPage'
import dashboard from '../views/Dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
