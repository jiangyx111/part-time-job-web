<template>
  <div class="login">
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <h2>登录</h2>
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        name: '',
        password: ''
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
.login{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form{
  width: 300px;
  padding: 30px;
  border-radius: 10px;
  background-color: aliceblue;
  .el-button{
    width:100%;
  }
}
</style>
