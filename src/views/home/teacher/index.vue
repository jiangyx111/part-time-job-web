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
            @close="handleClose"
          >
            <el-menu-item-group>
              <template slot="页面汇总"></template>
              <el-menu-item index="1-1" @click="goStatistics">首页</el-menu-item>
              <el-menu-item index="1-2" @click="goList">岗位列表</el-menu-item>
              <el-menu-item index="1-3" @click="goReview">审批列表</el-menu-item>
            </el-menu-item-group>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="home">
          <div class="selectandtable">
            <div class="select">
              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item>
                <el-button type="primary" @click="create">新建</el-button>
                </el-form-item>
                <el-form-item label="单位">
                  <el-select v-model="formInline.unit" placeholder="单位">
                    <el-option
                      v-for="item in formInline.unitOptions"
                      :key="item"
                      :label="item"
                      :value="item"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="岗位名称">
                  <el-input v-model="formInline.positionTitle" placeholder="岗位名称"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
              </el-form>

              <!-- 表格 -->
              <el-table
                ref="multipleTable"
                :data="data.list"
                tooltip-effect="dark"
                stripe="true"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column prop="positionTitle" label="岗位名称">
                  <template slot-scope="{ row }">{{ row.positionTitle }}</template>
                </el-table-column>
                <el-table-column prop="head" label="负责人">
                  <template slot-scope="{ row }">{{ row.head }}</template>
                </el-table-column>
                <el-table-column prop="positionNature" label="岗位性质">
                  <template slot-scope="{ row }">{{ row.positionNature }}</template>
                </el-table-column>
                <el-table-column prop="positionType" label="岗位类型">
                  <template slot-scope="{ row }">{{ row.positionType }}</template>
                </el-table-column>
                <el-table-column prop="requireNumber" label="需要人数">
                  <template slot-scope="{ row }">{{ row.requireNumber }}</template>
                </el-table-column>
                <el-table-column prop="applicantNumber" label="申请人数">
                  <template slot-scope="{ row }">{{ row.applicantNumber }}</template>
                </el-table-column>
                <el-table-column prop="jobNumber" label="在岗人数">
                  <template slot-scope="{ row }">{{ row.jobNumber }}</template>
                </el-table-column>
                <el-table-column prop="academicYear" label="学年">
                  <template slot-scope="{ row }">{{ row.academicYear }}</template>
                </el-table-column>
                <el-table-column prop="unit" label="单位">
                  <template slot-scope="{ row }">{{ row.unit }}</template>
                </el-table-column>
                <el-table-column label="操作" width="300">
    <template slot-scope="{ row }">
      <div class="operation-buttons">
        <el-button type="primary" @click="showDetail(row)">详情</el-button>
        <el-button type="success" @click="edit(row)">修改</el-button>
        <el-button type="danger" @click="remove(row)">删除</el-button>
      </div>
    </template>
  </el-table-column>
              </el-table>

              <!-- 分页器 -->
              <div style="display: flex;justify-content: flex-end; padding: 20px 20px 0 0">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="pageNumber"
                  :page-sizes="[5, 10, 20]"
                  :page-size="5"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="totalCount"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import echarts from 'echarts'
import axios from 'axios'
export default {
  created () {
    this.fetchData()
    console.log(this.$route.query.username)
    this.fetchUnit()
  },
  name: 'HomeIndex',
  data () {
    return {
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
    create () {
      this.$router.push({
        path: '/teacher/new/',
        query: {
          username: this.$route.query.username
        }
      })
    },
    goBack () {
      this.$router.push('/')
    },
    goReview () {
      this.$router.push({
        path: '/teacher/review',
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
      this.$message({
        message: '切换身份成功！',
        type: 'success'
      })
      // 切换身份逻辑
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.pageSize = val
      this.fetchData()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.pageNumber = val
      this.fetchData()
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    async fetchData () {
      try {
        const response = await axios.get('http://localhost:8866/ptjs/job/page', {
          params: {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            name: this.name, // 姓名查询条件
            unit: this.formInline.unit, // 根据下拉选择框的值设置查询条件
            positionTitle: this.formInline.positionTitle
          }
        })
        console.log(response.data)
        this.data = response.data.data
        this.totalCount = response.data.totalCount
      } catch (error) {
        console.error(error)
      }
    },
    async fetchUnit () {
      try {
        // 发送请求获取下拉框选项数据
        const response = await axios.get('http://localhost:8866/ptjs/job/unit')
        console.log(response.data.data)
        this.formInline.unitOptions = ['', ...Array.from(new Set(response.data.data))]
        console.log(this.formInline.unitOptions)
        // 其他代码...
      } catch (error) {
        console.error(error)
      }
    },
    onSubmit () {
      this.fetchData()
    },
    async showDetail (row) {
      this.$router.push({
        path: '/job/detail',
        query: {
          id: row.id,
          username: this.$route.query.username
        }
      })
    },
    edit (row) {
      // 修改岗位的逻辑
      this.$router.push({
        path: '/teacher/edit',
        query: {
          id: row.id,
          username: this.$route.query.username
        }
      })
    },
    remove(row) {
    const url = `http://localhost:8866/ptjs/job/${row.id}`;
    axios.delete(url)
    .then(response => {
      // 处理成功的响应
      console.log('数据删除成功:', response.data);
      // 在数据删除成功后刷新列表
      this.fetchData();
      })
    .catch(error => {
      // 处理错误
      console.error('删除数据时出错:', error);
      // 执行任何错误处理或显示错误消息
      });
    }
  }
}
</script>

<style scoped>
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
  flex-direction: row; /* 将子元素水平排列 */
  justify-content: space-between; /* 按钮最右显示 */
}
.header-content {
  display: flex;
  align-items: center;
}
.top-left {
display: flex;
align-items: center;
}

.right-align {
  margin-left: auto;
}

.back {
margin-left: 20px;
}

.menu {
height: 100%;
background: #f8f8f9;
}
.menu {
  display: flex;
  flex-direction: column;
  font-weight: bold;
}
.el-menu-vertical-demo {
height: 100%;
}

.home {
  background: white;
  height: 100%;
  width: 100%;
  padding-top: 20px;
}

.select {
padding: 20px;
}

.demo-form-inline {
margin-bottom: 20px;
}

.operation-buttons {
  display: flex;
}

.operation-buttons el-button {
  flex: 1;
  margin-right: 5px;
}
.title{
    font-size: 25px;
    font-family: "微软雅黑";
    margin-left: 20px;
  }
</style>
