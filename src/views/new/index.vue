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
    <el-breadcrumb-item>教师-岗位列表</el-breadcrumb-item>
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
              <el-menu-item index="1-2" @click="goList">岗位列表</el-menu-item>
              <el-menu-item index="1-3" @click="goApply">申请列表</el-menu-item>
          </el-menu-item-group>
      </el-menu>
      </div>
    </el-aside>
      <el-main>
        <div class="home">
  <!-- 表格 -->
  <div class="detail">
      <div class="message">
        <table class="table_style">
  <tbody>
    <tr>
      <th colspan="4" style="text-align: left;">岗位信息</th>
    </tr>
    <tr>
      <th style="width: 20%;">学年：</th>
      <td style="width: 30%;"><input type="text" v-model="academicYear" />
        <span class="required">*</span>
    </td>
      <th style="width: 20%;">部门名称：</th>
      <td style="width: 30%;"><input type="text" v-model="unit" />
        <span class="required">*</span>
    </td>
    </tr>
    <tr>
      <th style="width: 20%;">岗位名称：</th>
      <td colspan="3"><input type="text" v-model="positionTitle" />
      <span class="required">*</span>
    </td>
    </tr>
    <tr>
      <th>岗位负责人：</th>
      <td><input type="text" v-model="head" />
      <span class="required">*</span>
    </td>
      <th>负责人联系电话:</th>
      <td><input type="text" v-model="headPhone" /></td>
    </tr>
    <tr>
      <th>岗位需求人数：</th>
      <td><input type="text" v-model="requireNumber" />
        <span class="required">*</span>
    </td>
      <th>每周工作时间：</th>
      <td><input type="text" v-model="workingWeek" /></td>
    </tr>
    <tr>
      <th>工作开始时间：</th>
      <td><input type="text" v-model="startWorkDate" /></td>
      <th>工作结束时间：</th>
      <td><input type="text" v-model="endWorkDate" /></td>
    </tr>
    <tr>
      <th>岗位类别：</th>
      <td><input type="text" v-model="positionNature" />
        <span class="required">*</span>
    </td>
      <th>工资发放标准：</th>
      <td><input type="text" v-model="salary" /></td>
    </tr>
    <tr>
      <th>岗位类型：</th>
      <td><input type="text" v-model="positionType" />
        <span class="required">*</span>
    </td>
      <th>岗位层次：</th>
      <td><input type="text" v-model="positionLevel" /></td>
    </tr>
    <tr>
      <th>岗位指导老师：</th>
      <td><input type="text" v-model="teacher" /></td>
      <th>工资预算：</th>
      <td><input type="text" v-model="budget" /></td>
    </tr>
    <tr>
      <th>上学年岗位数：</th>
      <td><input type="text" v-model="numberLastYear" /></td>
      <th>申请月数：</th>
      <td><input type="text" v-model="applyMonth" /></td>
    </tr>
    <tr>
      <th>需求月份：</th>
      <td colspan="3"><input type="text" v-model="demandMonth" /></td>
    </tr>
    <tr>
      <th>聘用方式：</th>
      <td colspan="3"><input type="text" v-model="hireType" /></td>
    </tr>
    <tr>
      <th>工作地点：</th>
      <td colspan="3"><input type="text" v-model="workPlace" /></td>
    </tr>
    <tr>
      <th>岗位职责：</th>
      <td colspan="3"><input type="text" v-model="positionDuty" /></td>
    </tr>
    <tr>
      <th>岗位要求：</th>
      <td colspan="3"><input type="text" v-model="positionDemand" /></td>
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
      <td style="width: 30%;"><input type="text" v-model="startPublicDate"></td>
      <th style="width: 20%;">发布结束时间：</th>
      <td style="width: 30%;"><input type="text" v-model="endPublicDate"></td>
    </tr>
    <tr>
      <th>性别限制：</th>
      <td><input type="text" v-model="genderRestriction"></td>
      <th>限制年龄：</th>
      <td><input type="text" v-model="gradeRestriction"></td>
    </tr>
    <tr>
      <th>限困难生：</th>
      <td colspan="3"><input type="text" v-model="poorRestriction"></td>
    </tr>
    <tr>
      <th>限制院系：</th>
      <td colspan="3"><input type="text" v-model="academyRestriction"></td>
    </tr>
    <tr>
      <th>限制专业：</th>
      <td colspan="3"><input type="text" v-model="majorRestriction"></td>
    </tr>
  </tbody>
</table>
<el-button type="primary" @click="submit">添加</el-button>
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
    data () {
      return {
       // jobInfo: {},
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
        submit() {
        const postData = {
        id: this.id,
        positionTitle: this.positionTitle,
        head: this.head,
        positionNature: this.positionNature,
        positionType: this.positionType,
        requireNumber: this.requireNumber,
        applicantNumber: this.applicantNumber,
        jobNumber: this.jobNumber,
        academicYear: this.academicYear,
        unit: this.unit
      };

      axios.post('http://localhost:8866/ptjs/job', postData)
        .then(response => {
          // 处理成功响应
          console.log(response.data);
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },    
      goList () {
        this.$router.push({
          path: '/teacher/home',
          query: {
            username: this.$route.query.username
          }
        })
      },
      goStatistics () {
        this.$router.push({
        path: '/statistics2',
        query: {
          username: this.$route.query.username
          }
       })
      },
      goApply () {
      this.$router.push({
        path: '/teacher/apply',
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
      }
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
  .required {
    color: red;
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
  