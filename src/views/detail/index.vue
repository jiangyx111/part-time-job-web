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
  <el-breadcrumb-item>学生-岗位列表</el-breadcrumb-item>
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
          <el-menu-item index="1-1" @click="goTotal">岗位列表</el-menu-item>
          <el-menu-item index="1-2" @click="goApply">申请列表</el-menu-item>
          <el-menu-item index="1-3" @click="goPerson">个人中心</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
    <el-main>
      <div class="home">
<!-- 表格 -->
<div class="detail">
    <el-button type="primary" class="goback el-button--small" @click="goBack">返回</el-button>
    <el-button type="primary" class="goapply el-button--small" @click="goApplyDetail">申请</el-button>
    <div class="message">
      <table class="table_style">
        <tbody>
          <tr>
            <th colspan="4" style="text-align: left;">岗位信息</th>
          </tr>
          <tr>
            <th style="width: 20%;">学年：</th>
            <td style="width: 30%;">{{ jobInfo.academicYear }}</td>
            <th style="width: 20%;">部门名称：</th>
            <td style="width: 30%;">{{ jobInfo.unit}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位名称：</th>
            <td colspan="3">{{ jobInfo.positionTitle}}</td>
          </tr>
          <tr>
            <th>岗位负责人：</th>
            <td>{{ jobInfo.head}}</td>
            <th>负责人联系电话:</th>
            <td>{{ jobInfo.headPhone}}</td>
          </tr>
          <tr>
            <th>岗位需求人数：</th>
            <td>{{ jobInfo.requireNumber}}</td>
            <th>每周工作时间：</th>
            <td>{{ jobInfo.workingWeek}}</td>
          </tr>
          <tr>
            <th>工作开始时间：</th>
            <td>{{ jobInfo.startWorkDate}}</td>
            <th>工作结束时间：</th>
            <td>{{ jobInfo.endWorkDate}}</td>
          </tr>
          <tr>
            <th>岗位类别：</th>
            <td>{{ jobInfo.positionNature}}</td>
            <th>工资发放标准：</th>
            <td>{{ jobInfo.salary}}</td>
          </tr>
          <tr>
            <th>岗位类型：</th>
            <td>{{ jobInfo.positionType}}</td>
            <th>岗位层次：</th>
            <td>{{ jobInfo.positionLevel}}</td>
          </tr>
          <tr>
            <th>岗位指导老师：</th>
            <td>{{ jobInfo.teacher}}</td>
            <th>工资预算：</th>
            <td>{{ jobInfo.budget}}</td>
          </tr>
          <tr>
            <th>上学年岗位数：</th>
            <td>{{ jobInfo.numberLastYear}}</td>
            <th>申请月数：</th>
            <td>{{ jobInfo.applyMonth}}</td>
          </tr>
          <tr>
            <th>需求月份：</th>
            <td colspan="3">{{ jobInfo.demandMonth}}</td>
          </tr>
          <tr>
            <th>聘用方式：</th>
            <td colspan="3">{{ jobInfo.hireType}}</td>
          </tr>
          <tr>
            <th>工作地点：</th>
            <td colspan="3">{{ jobInfo.workPlace}}</td>
          </tr>
          <tr>
            <th>岗位职责：</th>
            <td colspan="3">{{ jobInfo.positionDuty}}</td>
          </tr>
          <tr>
            <th>岗位要求：</th>
            <td colspan="3">{{ jobInfo.positionDemand}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="condition">
      <table class="table_style">
        <tbody>
          <tr>
            <th colspan="4" style="text-align: left;">申请条件</th>
          </tr>
          <tr>
            <th style="width: 20%;">发布起始时间：</th>
            <td style="width: 30%;">{{ jobInfo.startPublicDate}}</td>
            <th style="width: 20%;">发布结束时间：</th>
            <td style="width: 30%;">{{ jobInfo.endPublicDate}}</td>
          </tr>
          <tr>
            <th>性别限制：</th>
            <td>{{ jobInfo.genderRestriction}}</td>
            <th>限制年龄：</th>
            <td>{{ jobInfo.gradeRestriction}}</td>
          </tr>
          <tr>
            <th>限困难生：</th>
            <td colspan="3">{{ jobInfo.poorRestriction}}</td>
          </tr>
          <tr>
            <th>限制院系：</th>
            <td colspan="3">{{ jobInfo.academyRestriction}}</td>
          </tr>
          <tr>
            <th>限制专业：</th>
            <td colspan="3">{{ jobInfo.majorRestriction}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomeIndex',
  created () {
    this.fetchData()
  },
  data () {
    return {
      jobInfo: {},
      tabPosition: 'left',
      formInline: {
        unitOptions: [],
        positionTitle: ''
      },
      data: {
        list: []
      },
      id: '',
      positionTitle: '',
      head: '',
      positionNature: '',
      positionType: '',
      requireNumber: '',
      applicantNumber: '',
      jobNumber: '',
      academicYear: '',
      unit: '',
      currentPage: '',
      pageNumber: 1,
      pageSize: 5,
      totalCount: null
    }
  },

  methods: {
    goApplyDetail (){

    },
    goBack () {
      this.$router.push({
        path:"/student/home",
        query:{
          username:this.$route.query.username
        }
      })
    },
    goTotal () {
      this.$router.push({
        path:"/student/home",
        query:{
          username:this.$route.query.username
        }
      })
    },
    async fetchData () {
      try {
        console.log("created")
        const url=`http://localhost:8866/ptjs/job/${this.$route.query.id}`
        console.log(url)
        const response = await axios.get(url)
        this.jobInfo = response.data.data
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    },
    goApply () {
      this.$router.push({
        path:"/student/apply",
        query:{
          username:this.$route.query.username
        }
      })
    },
    goPerson () {
      this.$router.push({
        path:"/student/person",
        query:{
          username:this.$route.query.username
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
  }
}
</script>
<style lang="scss" scoped>
.detail{
  line-height: 1.5;
}
.home {
  width: 100%;
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
  color: black;
  font-weight: bold; /* 加粗文字 */
  font-size: 25px; /* 放大文字 */
  margin-top: -20px;
}
.message{
   width: 100%;
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

// .detail {
//   background-image: url('./login.jpg');
// }
.goback {
  margin-bottom: 15px;
  margin-left: 20px;
  margin-top: 15px;
}
.table_style {
  border-collapse: collapse;
  width: 80%;
  font-size: 11px;
  line-height: 0.75;
  transform: translateX(25px);
  background-color: white;
}
.table_style th{
  border: 1px solid rgb(180, 178, 178);
  padding: 8px;
  text-align: right;
  background-color: rgba(240, 240, 240, 0.629)
}
.table_style td {
  border: 1px solid rgb(180, 178, 178);
  padding: 8px;
  text-align: left;
}
</style>

