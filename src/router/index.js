import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/view/home/index'
import Login from '@/views/login/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
