import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/register' || to.path === '/login') {
    next()
  } else {
    const userToken = localStorage.getItem('token')
    if (userToken === null || userToken === '') {
      alert('无权限，请先登录!')
      return next('/login')
    } else {
      next()
    }
  }
})

// 请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
