import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    // 若localSorage存在token，将值赋给Vuex.state.token
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
      // JSON.stringify(ary)
      // 将staff存成JSON格式
      localStorage.setItem('username', JSON.stringify(username))
    },
    setToken (state, data) {
      state.token = data.token
    },
    // 我页面中写了退出登录的按钮所以补了一个logout用来清空localStorage中的数据
    logout (state) {
      localStorage.removeItem('token')
      state.token = null
      localStorage.removeItem('username')
      state.setUsername = null
      // 我写的RSA加密需向后端获取公钥，为了方便我在拿到公钥后直接存入localStorage中，所以在这里也要清空
      localStorage.removeItem('publickey')
      state.publickey = null
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
