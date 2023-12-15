import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.filter('chineseOrdinal', function (number) {
  const suff = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  if (number >= 1 && number <= 10) {
    return '第' + suff[number] + '节'
  } else {
    return number
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// // 路由全局前置守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/register' || to.path === '/login') {
//     next()
//   } else {
//     const userToken = localStorage.getItem('token')
//     if (userToken === null || userToken === '') {
//       alert('无权限，请先登录!')
//       return next('/login')
//     } else {
//       next()
//     }
//   }
// })

// // 请求拦截器，在请求头中加token
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('token')) {
//       config.headers.token = localStorage.getItem('token')
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
