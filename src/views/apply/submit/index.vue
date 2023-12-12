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
  <el-breadcrumb-item>学生-申请详情</el-breadcrumb-item>
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
          <el-menu-item index="1-4" @click="goPerson">个人中心</el-menu-item>        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
    <el-main>
      <div class="home">
<!-- 表格 -->
<div class="ApplyDetail">
    <el-button type="primary" class="goback el-button--small" @click="goJobDetail">返回</el-button>
    <el-button type="primary" class="goback el-button--small" @click="goToApply">提交申请</el-button>
    <div class="message">
      <table class="table_style">
        <tbody>
          <tr>
            <th colspan="4" style="text-align: left;">申请岗位信息</th>
          </tr>
          <tr>
            <th style="width: 20%;">学年：</th>
            <td colspan="3">{{ jobInfo.academicYear}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">单位名称：</th>
            <td style="width: 30%;">{{ jobInfo.unit}}</td>
            <th style="width: 20%;">岗位名称：</th>
            <td style="width: 30%;">{{ jobInfo.positionTitle}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位类型：</th>
            <td style="width: 30%;">{{ jobInfo.positionType}}</td>
            <th style="width: 20%;">岗位层次：</th>
            <td style="width: 30%;">{{ jobInfo.positionLevel}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">工作开始时间：</th>
            <td style="width: 30%;">{{ jobInfo.startWorkDate}}</td>
            <th style="width: 20%;">工作结束时间：</th>
            <td style="width: 30%;">{{ jobInfo.endWorkDate}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">每周工作时间：</th>
            <td style="width: 30%;">{{ jobInfo.workingWeek}}</td>
            <th style="width: 20%;">工资发放标准：</th>
            <td style="width: 30%;">{{ jobInfo.salary}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位指导老师：</th>
            <td style="width: 30%;">{{ jobInfo.teacher}}</td>
            <th style="width: 20%;">工资预算：</th>
            <td style="width: 30%;">{{ jobInfo.budget}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">上学年岗位数：</th>
            <td style="width: 30%;">{{ jobInfo.numberLastYear}}</td>
            <th style="width: 20%;">申请月数：</th>
            <td style="width: 30%;">{{ jobInfo.applyMonth}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">需求月份：</th>
            <td colspan="3">{{ jobInfo.demandMonth}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">聘用方式：</th>
            <td colspan="3">{{ jobInfo.hireType}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">工作地点：</th>
            <td colspan="3">{{ jobInfo.workPlace}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位职责：</th>
            <td colspan="3">{{ jobInfo.positionDuty}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位要求：</th>
            <td colspan="3">{{ jobInfo.positionDemand}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">岗位需求人数：</th>
            <td colspan="3">{{ jobInfo.requireNumber}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">申请人数：</th>
            <td colspan="3">{{ jobInfo.applyNumber}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">审核通过人数：</th>
            <td colspan="3">{{ jobInfo.passNumber}}</td>
          </tr>
          <tr>
            <th colspan="4" style="text-align: left;">学生申请信息</th>
          </tr>
          <tr>
            <th style="width: 20%;">学号：</th>
            <td style="width: 30%;">{{ jobInfo.schoolId}}</td>
            <th style="width: 20%;">姓名：</th>
            <td style="width: 30%;">{{ jobInfo.name}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">院系：</th>
            <td style="width: 30%;">{{ jobInfo.faculty}}</td>
            <th style="width: 20%;">专业：</th>
            <td style="width: 30%;">{{ jobInfo.major}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">年级：</th>
            <td style="width: 30%;">{{ jobInfo.grade}}</td>
            <th style="width: 20%;">班级：</th>
            <td style="width: 30%;">{{ jobInfo.classes}}</td>
          </tr>
          <tr>
            <th style="width: 20%;">联系电话：</th>
            <td style="width: 30%;">
                <input type="text" v-model="jobInfo.phone">
                <span class="required-indicator" v-show="!jobInfo.phone"> *</span>
            </td>
            <th style="width: 20%;">银行卡号：</th>
            <td style="width: 30%;">
                <input type="text" v-model="jobInfo.bankCardNumber">
                <span class="required-indicator" v-show="!jobInfo.bankCardNumber"> *</span>
            </td>
          </tr>
          <tr>
            <th style="width: 20%;">QQ：</th>
            <td colspan="3">
                <input type="text" v-model="jobInfo.qq">
            </td>
          </tr>
          <tr>
            <th style="width: 20%;">是否认定为贫困生：</th>
            <td colspan="3">
                <label>
                    <input type="radio" value="0" label="0" v-model="jobInfo.poorSymbol"> 是
                </label>
                <label>
                    <input type="radio" value="1" label="1" v-model="jobInfo.poorSymbol"> 否
                </label>
            </td>
          </tr>
          <tr>
            <th style="width: 20%;">上学期成绩情况：</th>
            <td colspan="3">
                <label>必修科目数：</label>
                <input type="text" v-model="jobInfo.classNumber">
                <label>平均分：</label>
                <input type="text" v-model="jobInfo.average">

            </td>
          </tr>
          <tr>
            <th style="width: 20%;">有何特长：</th>
            <td colspan="3">
              <input type="text" v-model="jobInfo.special">
            </td>
          </tr>
          <tr>
            <th style="width: 20%;">申请理由：</th>
            <td colspan="3">
              <input type="text" v-model="jobInfo.applianceReason">
            </td>
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
import { Message } from 'element-ui'
export default {
  name: 'AppleDetailIndex',
  created () {
    this.fetchData()
  },
  data () {
    return {
      jobInfo: {}
    }
  },
  methods: {
    goBack () {
      this.$router.push({
        path: '/'
      })
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
    async goToApply () {
      try {
        const url = 'http://localhost:8866/ptjs/applianceList/apply/submit'
        const response = await axios.post(url, {
          applianceListId: '',
          jobId: this.$route.query.jobId,
          username: this.$route.query.username,
          name: this.jobInfo.name,
          major: this.jobInfo.major,
          classes: this.jobInfo.classes,
          bankCardNumber: this.jobInfo.bankCardNumber,
          phone: this.jobInfo.phone,
          poorSymbol: this.jobInfo.poorSymbol,
          classNumber: this.jobInfo.classNumber,
          average: this.jobInfo.average,
          special: this.jobInfo.special,
          applianceReason: this.jobInfo.applianceReason,
          academicYear: this.jobInfo.academicYear,
          unit: this.jobInfo.unit,
          positionTitle: this.jobInfo.positionTitle,
          positionType: this.jobInfo.positionType,
          positionLevel: this.jobInfo.positionLevel,
          startWorkDate: this.jobInfo.startWorkDate,
          endWorkDate: this.jobInfo.endWorkDate,
          workingWeek: this.jobInfo.workingWeek,
          salary: this.jobInfo.salary,
          teacher: this.jobInfo.teacher,
          budget: this.jobInfo.budget,
          numberLastYear: this.jobInfo.numberLastYear,
          applyMonth: this.jobInfo.applyMonth,
          demandMonth: this.jobInfo.demandMonth,
          hireType: this.jobInfo.hireType,
          workPlace: this.jobInfo.workPlace,
          positionDuty: this.jobInfo.positionDuty,
          positionDemand: this.jobInfo.positionDemand,
          requireNumber: this.jobInfo.requireNumber,
          applyNumber: this.jobInfo.applyNumber,
          passNumber: this.jobInfo.passNumber,
          reviewStatus: this.jobInfo.reviewStatus,
          reviewDateTime: this.jobInfo.reviewDateTime,
          reviewReason: this.jobInfo.reviewReason,
          schoolId: this.jobInfo.schoolId,
          faculty: this.jobInfo.faculty,
          grade: this.jobInfo.grade,
          qq: this.jobInfo.qq
        })
        Message.success('申请成功')
        this.goTotal()
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    },
    goJobDetail () {
      this.$router.push({
        path: '/job/detail',
        query: {
          username: this.$route.query.username,
          id: this.$route.query.jobId
        }
      })
    },
    goPerson () {
      this.$router.push({
        path: '/student/person',
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
        console.log('created')
        const url = 'http://localhost:8866/ptjs/applianceList/apply/newDetail'
        console.log(url)
        const response = await axios.get(url, {
          params: {
            username: this.$route.query.username,
            jobId: this.$route.query.jobId
          }
        })
        this.jobInfo = response.data.data.data
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.goback {
  margin-bottom: 15px;
  margin-left: 30px;
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
.required-indicator {
  color: red;
}

.red-text{
  color: red;
}
.ApplyDetail{
  width: 100%;
}
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
</style>
