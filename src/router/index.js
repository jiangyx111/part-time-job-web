import Vue from 'vue'
import VueRouter from 'vue-router'
import StudentHome from '@/views/home/student/index'
import TeacherHome from '@/views/home/teacher/index'
import StudentApply from '@/views/apply/student/index'
import StudentPerson from '@/views/person/student/index'
import Login from '@/views/login/index'
import Register from '@/views/register/index'
import Detail from '@/views/detail/index'
import ApplyDetail from '@/views/apply/detail/index'
import Statistics from '@/views/statistics/index'
import ApplySubmit from '@/views/apply/submit/index'

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
    path: '/student/person',
    name: 'StudentPerson',
    component: StudentPerson
  }, {
    path: '/job/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/apply/detail',
    name: 'ApplyDetail',
    component: ApplyDetail
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  },
  {
    path: '/teacher/home',
    name: 'TeacherHome',
    component: TeacherHome
  },
  {
    path: '/apply/submit',
    name: 'ApplySubmit',
    component: ApplySubmit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
