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
  <el-breadcrumb-item>首页</el-breadcrumb-item>
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
          <el-menu-item index="1-1" >首页</el-menu-item>
          <el-menu-item index="1-2" @click="goTotal">岗位列表</el-menu-item>
          <el-menu-item index="1-3" @click="goApply">申请列表</el-menu-item>
          <el-menu-item index="1-4" @click="goPerson">个人中心</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
   <el-main>
  <div class="home">
    <!-- <el-button type="primary" class="goback el-button--small" @click="goBack">返回</el-button> -->
    <div class="chart1">
      <div class="chart" ref="verticalBarChart"></div>
    </div>
    <div class="chart2">
      <div class="chart" ref="horizontalBarChart"></div>
    </div>
    <div class="chart3">
      <div class="chart" ref="lineChart"></div>
    </div>
    <div class="chart4">
      <div class="chart" ref="pieChart"></div>
    </div>
  </div>
</el-main>
  </el-container>
</el-container>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'statisticsIndex',
  methods: {
    goBack () {
      this.$router.push('/')
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
    }
  },
  mounted () {
    // 初始化竖向柱状图实例
    const verticalBarChart = echarts.init(this.$refs.verticalBarChart)
    // 绘制竖向柱状图
    verticalBarChart.setOption({
      // 配置项
      title: {
        text: '竖向柱状图'
      },
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }]
    })

    // 初始化横向柱状图实例
    const horizontalBarChart = echarts.init(this.$refs.horizontalBarChart)
    // 绘制横向柱状图
    horizontalBarChart.setOption({
      // 配置项
      title: {
        text: '横向柱状图'
      },
      yAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      xAxis: {},
      series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }]
    })

    // 初始化折线图实例
    const lineChart = echarts.init(this.$refs.lineChart)
    // 绘制折线图
    lineChart.setOption({
      // 配置项
      title: {
        text: '折线图'
      },
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [{
        name: '数量',
        type: 'line',
        data: [5, 20, 36, 10, 10]
      }]
    })

    // 初始化饼状图实例
    const pieChart = echarts.init(this.$refs.pieChart)
    // 绘制饼状图
    pieChart.setOption({
      // 配置项
      title: {
        text: '饼状图'
      },
      series: [{
        name: '数量',
        type: 'pie',
        data: [
          { value: 5, name: 'A' },
          { value: 20, name: 'B' },
          { value: 36, name: 'C' },
          { value: 10, name: 'D' },
          { value: 10, name: 'E' }
        ]
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
.chart {
  width: 320px;
  height: 280px;
}

.chart1 {
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 100px;
  /* margin-top: 0px; */
  /* margin-left: 50px; */
}

.chart2 {
  position: absolute;
  right: 0;
  top: 0;
  padding-right: 60px;
  /* margin-top: 0px; */
  /* margin-left: 50px; */
}

.chart3 {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 100px;
  padding-bottom: 40px;
  /* margin-top: 0px; */
  /* margin-left: 10px; */
}

.chart4 {
  position: absolute;
  bottom: 0;
  right: 0;
  padding-bottom: 40px;
  padding-right: 60px;

  /* margin-top: 0px; */
  /* margin-left: 700px; */
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
.header-content {
  display: flex;
  align-items: center;
  flex-direction: row; /* 将子元素水平排列 */
  justify-content: space-between; /* 按钮最右显示 */
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
  .goback {
  margin-bottom: 15px;
  margin-left: 20px;
  margin-top: 15px;
}
</style>
