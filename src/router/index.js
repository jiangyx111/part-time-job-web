import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentHome from '@/views/home/student/index'
import TeacherHome from '@/views/home/teacher/index'
import StudentApply from '@/views/apply/student/index'
import Login from '@/views/login/index'
import Register from '@/views/register/index'

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
    path: '/teacher/home',
    name: 'TeacherHome',
    component: TeacherHome
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
