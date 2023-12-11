<template>
  <el-container>
    <el-header class="header">
  <div class="header-content">
    <div class="top-left">
      <img src="./logo.png" alt="logo" style="width: 80px;">
      <span class="title">
      勤工助学管理系统
      </span>
    </div>
  </div>
  <el-breadcrumb separator="/" style="padding-left: 10px;">
  <el-breadcrumb-item></el-breadcrumb-item>
  <el-breadcrumb-item>学生-个人中心</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="right-align">
    <el-button type="text" @click="handlePhoneIconClick">
    <i class="el-icon-phone" style="padding-right: 20px;"></i>
    </el-button>
    <el-button type="text" @click="handleSwitchIconClick">
    <i class="el-icon-switch-button" style="padding-right: 20px;"></i>
    </el-button>
    <el-button type="primary" class="back" @click="goBack">退出登录</el-button>
  </div>
</el-header>
  <el-container>
    <el-aside width="200px">
      <div class="menu" style="flex: 1;">
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
        <el-menu-item-group>
          <template slot="页面汇总"></template>
          <el-menu-item index="1-1" @click="goStatistics">首页</el-menu-item>
          <el-menu-item index="1-2" @click="goTotal">岗位列表</el-menu-item>
          <el-menu-item index="1-3" @click="goApply">申请列表</el-menu-item>
          <el-menu-item index="1-4" >个人中心</el-menu-item>

        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
    <el-main>
      <span class="son-title">
      个人信息认证
      </span>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form-container">
         <el-form-item label="姓名" style="width: 70%;">
           <el-input v-model="formLabelAlign.name"></el-input>
         </el-form-item>
         <el-form-item label="专业" style="width: 70%;">
           <el-input v-model="formLabelAlign.major"></el-input>
         </el-form-item>
         <el-form-item label="班级" style="width: 70%;">
           <el-input v-model="formLabelAlign.classes"></el-input>
         </el-form-item>
         <el-form-item label="银行卡号" style="width: 70%;">
           <el-input v-model="formLabelAlign.bankCardNumber"></el-input>
         </el-form-item>
         <el-form-item label="联系电话" style="width: 70%;">
           <el-input v-model="formLabelAlign.phone"></el-input>
         </el-form-item>
         <el-form-item label="贫困生" style="width: 70%;">
          <el-select v-model="formLabelAlign.poorSymbol" placeholder="请选择">
            <el-option label="是" :value="0"></el-option>
            <el-option label="否" :value="1"></el-option>
          </el-select>
         </el-form-item>
         <el-button type="primary" class="modify" @click="goModify">提交修改</el-button>
       </el-form>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import axios from 'axios'
export default {
  created () {
    this.fetchData()
  },
  name: 'HomeIndex',
  data () {
    return {
      tabPosition: 'left',
      formInline: {
        unitOptions: [],
        positionTitle: ''
      },
      labelPosition: 'left',
      formLabelAlign: {
        name: '',
        major: '',
        classes: '',
        bankCardNumber: '',
        phone: '',
        poorSymbol: ''
      },
      data: {
        list: []
      },
      id: '',
      currentPage: '',
      pageNumber: 1,
      pageSize: 5,
      totalCount: null
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    },
    async goModify () {
      try {
        // const url = `http://localhost:8866/ptjs/user`;
        // const response = await axios.put(url,this.formLabelAlign);
        this.$message.success('修改成功')
        console.log(this.formLabelAlign)
      } catch (error) {
        console.error(error)
      }
    },
    goStatistics () {
      this.$router.push({
        path: '/statistics',
        query: {
          username: this.$route.query.username
        }
      })
    },
    goTotal () {
      this.$router.push({
        path: '/student/home',
        query: {
          username: this.$route.query.username
        }
      })
    },
    goApply () {
      this.$router.push({
        path: '/student/apply',
        query: {
          username: this.$route.query.username
        }
      })
    },
    handlePhoneIconClick () {
      const h = this.$createElement
      this.$notify({
        title: '客服联系方式',
        message: h('div', { style: 'color: teal' }, [
          '联系人：计算机能力有限小组',
          '联系电话：189-XXXX-XXXX'
        ].map(text => h('div', [text, h('br')])))
      })
    },
    handleSwitchIconClick () {
      this.goBack()
    },
    async fetchData () {
      try {
        const url = `http://localhost:8866/ptjs/user/${this.$route.query.username}`
        const response = await axios.get(url)
        this.formLabelAlign = response.data.data
        console.log(this.formLabelAlign)
      } catch (error) {
        console.error(error)
      }
    },
    onSubmit () {
      this.fetchData() // 调用 fetchData 方法获取数据
    },
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.fetchData()
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageNumber = val
      this.fetchData()
    },
    handleSearch () {
      this.pageNumber = 1 // 重置页码为第一页
      this.fetchData()
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  align-items: flex-start;
  // background-image: url('./login.jpg'); /* 设置背景图 */
  background-size: cover;
  background-position: center;
  position: relative; /* 设置为相对定位 */
}
.menu {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
.select {
  margin-bottom: 20pxS;
}
.selectandtable {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header-content {
  display: flex;
  align-items: center;
  flex-direction: row; /* 将子元素水平排列 */
  justify-content: space-between; /* 按钮最右显示 */
}
.content {
  margin-left: 350px; /* 调整文字与按钮之间的间距 */
  color: black;
  font-weight: bold; /* 加粗文字 */
  font-size: 25px; /* 放大文字 */
  margin-top: -20px;
}
  .header {
    height: 50px;
    border-bottom: 2px solid rgb(233, 233, 233);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-container {
  height: 70%;
  width: 80%;
  margin-top: 20px;
  margin-left: 10%;
  justify-content: center;
}

.header-content {
  display: flex;
  align-items: center;
}

.right-align {
  margin-left: auto;
}

  .back {
    margin-right: 20px;
  }
  .title{
    font-size: 25px;
    font-family: "微软雅黑";
    margin-left: 20px;
  }
  .top-left{
    display: flex;
  align-items: center;
  justify-content: center;
  }
  .son-title{
    font-size: 25px;
    margin-left: 30%;
  }
  .modify{
    margin-left: 30%;
  }
</style>
