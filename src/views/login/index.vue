<template>
  <el-container class="all">
  <el-aside width="60%"></el-aside>
  <el-main class="main">
    <div class="login">
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <h1>勤工助学管理系统</h1>
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
              v-model="form.password"
              :type="passwordVisible ? 'text' : 'password'"
              clearable
              show-password
              ></el-input>
        </el-form-item>
      <el-form-item label="身份">
        <el-select v-model="form.status" placeholder="请选择">
           <el-option
            v-for="item in options"
           :key="item.value"
           :label="item.label"
           :value="item.value">
           </el-option>
         </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-main>
</el-container>
</template>
<script>
import axios from 'axios'
import store from '@/store/index.js'
import { Message } from 'element-ui'

export default {
  name: 'LoginIndex',
  data () {
    return {
      options: [{
        value: '1',
        label: '学生'
      }, {
        value: '2',
        label: '教师'
      }],
      form: {
        name: '',
        password: '',
        status: ''
      },
      token: null,
      passwordVisible: false
    }
  },
  methods: {
    onSubmit () {
      // 获取用户输入的账号和密码
      const { username, password, status } = this.form
      // 构造请求体数据
      const requestData = {
        username: username,
        password: password,
        status: status
      }
      if (status === '1') {
        axios.post('http://localhost:8866/ptjs/user/login', requestData)
          .then(response => {
          // 请求成功的处理逻辑
            console.log('登录成功')
            console.log(response.data)
            console.log(response.data.token)
            store.commit('setToken', response.data)
            store.commit('setUsername', requestData.username)
            // 执行登录成功后的操作，如跳转到其他页面
            this.$router.push('/student/home')
          })
          .catch(error => {
          // 请求失败的处理逻辑
            console.log('登录失败:', error)
          // 在这里可以给用户显示错误提示信息
          })
      } else if (status === '2') {
        axios.post('http://localhost:8866/ptjs/user/login', requestData)
          .then(response => {
            // 请求成功的处理逻辑
            console.log('登录成功')
            // 执行登录成功后的操作，如跳转到其他页面
            Message.success('登陆成功')
            this.$router.push('/teacher/home')
          })
          .catch(error => {
          // 请求失败的处理逻辑
            console.log('登录失败:', error)
            // 在这里可以给用户显示错误提示信息
            Message.error('登陆失败')
          })
      }
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>
<style lang="scss" scoped>
   .all{
    height: 100%;
    background: url('./login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
   .main{ background: rgba(255, 255, 255, 0.5); }
.login{
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.el-form{
  padding: 30px;
  border-radius: 10px;
  .el-button{
    width:100%;
  }
}
h1{
  font-size: 30px;
}
</style>
