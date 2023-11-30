<template>
  <el-container class="all">
  <el-aside width="60%"></el-aside>
  <el-main class="main">
    <div class="login">
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <h2>登录</h2>
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
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
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-main>
</el-container>
</template>
<script>
import axios from 'axios'
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
      }
    }
  },
  methods: {
    onSubmit () {
      // 获取用户输入的账号和密码
      const { name, password } = this.form
      // 构造请求体数据
      const requestData = {
        username: name,
        password: password
      }
      axios.post('http://192.168.42.114:8866/ptjs/user/login', requestData)
        .then(response => {
          // 请求成功的处理逻辑
          console.log('登录成功')
          // 执行登录成功后的操作，如跳转到其他页面
          this.$router.push('/home')
        })
        .catch(error => {
          // 请求失败的处理逻辑
          console.log('登录失败:', error)
          // 在这里可以给用户显示错误提示信息
        })
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
</style>
