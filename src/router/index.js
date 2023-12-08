import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentHome from '@/views/home/student/index'
import StudentApply from '@/views/apply/student/index'
import Login from '@/views/login/index'
import Register from '@/views/register/index'
import Detail from '@/views/detail/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/student/home',
    name: 'StudentHome',
    component: StudentHome
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/student/apply',
    name: 'StudentApply',
    component: StudentApply
  },
  {
    path: '/student/detail',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
