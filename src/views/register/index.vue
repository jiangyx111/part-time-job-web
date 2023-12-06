<template>
  <el-container class="all">
    <el-aside width="60%"></el-aside>
    <el-main class="main">
      <div class="login">
        <el-form label-position="top" ref="form" :model="form" :rules="rules" label-width="80px">
          <h1>勤工助学管理系统</h1>
          <el-form-item label="账号" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="form.password"
              :type="passwordVisible ? 'text' : 'password'"
              clearable
              show-password
              ></el-input>          </el-form-item>
          <el-form-item label="身份">
            <el-select v-model="form.identity" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="text" @click="login">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
import { Message } from 'element-ui'

export default {
  name: 'LoginIndex',
  data () {
    return {
      options: [
        {
          value: '1',
          label: '学生'
        },
        {
          value: '2',
          label: '教师'
        }
      ],
      form: {
        name: '',
        password: '',
        identity: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { pattern: /^[A-Za-z]/, message: '首字符必须是字母', trigger: 'blur' },
          { min: 6, message: '长度不能小于6位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/, message: '必须由字母和数字组成', trigger: 'blur' },
          { min: 6, message: '长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      // 获取用户输入的账号和密码
      const { name, password, identity } = this.form
      // 构造请求体数据
      const requestData = {
        username: name,
        password: password,
        identity: identity
      }
      this.$refs.form.validate(valid => {
        if (valid) {
          axios
            .post('http://localhost:8866/ptjs/user/register', requestData)
            .then(response => {
              // 请求成功的处理逻辑
              if (response.data.code === 0) {
                console.log('注册成功')
                // 执行登录成功后的操作，如跳转到其他页面
                this.$router.push('/')
                Message.success(response.data.msg)
              } else {
                // 请求失败的处理逻辑
                // 在这里可以给用户显示错误提示信息
                Message.error(response.data.msg)
              }
            })
            .catch(error => {
              // 请求失败的处理逻辑
              console.log('注册失败:', error)
              // 在这里可以给用户显示错误提示信息
              Message.error('注册失败')
            })
        } else {
          // 表单验证不通过，给出错误提示
          Message.error('表单验证未通过')
        }
      })
    },
    login () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.all {
  height: 100%;
  background: url('./register.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  background: rgba(255, 255, 255, 0.5);
}
.login {
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.el-form {
  padding: 30px;
  border-radius: 10px;
  .el-button {
    width: 100%;
  }
}
h1 {
  font-size: 30px;
}
</style>
