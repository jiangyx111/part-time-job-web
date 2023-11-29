<template>
  <div class="login">
    <el-form label-position="top" ref="form" :model="form" label-width="80px">
      <h2>登录</h2>
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
