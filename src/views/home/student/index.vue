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
          <el-menu-item index="1-1">岗位列表</el-menu-item>
          <el-menu-item index="1-2" @click="goApply">申请列表</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
    <el-main>
      <div class="home">
    <div class="selectandtable">
    <div class="select">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="单位">
        <el-select v-model="formInline.unit" placeholder="单位">
          <el-option
          v-for="item in formInline.unitOptions"
          :key="item"
          :label="item"
          :value="item">
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
      @selection-change="handleSelectionChange">
      <el-table-column
        prop="positionTitle"
        label="岗位名称">
        <template slot-scope="{ row }">{{ row.positionTitle }}</template>
      </el-table-column>
      <el-table-column
        prop="head"
        label="负责人">
        <template slot-scope="{ row }">{{ row.head }}</template>
      </el-table-column>
      <el-table-column
        prop="positionNature"
        label="岗位性质">
        <template slot-scope="{ row }">{{ row.positionNature }}</template>
      </el-table-column>
      <el-table-column
        prop="positionType"
        label="岗位类型">
        <template slot-scope="{ row }">{{ row.positionType }}</template>
      </el-table-column>
      <el-table-column
        prop="requireNumber"
        label="需要人数">
        <template slot-scope="{ row }">{{ row.requireNumber }}</template>
      </el-table-column>
      <el-table-column
        prop="applicantNumber"
        label="申请人数">
        <template slot-scope="{ row }">{{ row.applicantNumber }}</template>
      </el-table-column>
      <el-table-column
        prop="jobNumber"
        label="在岗人数">
        <template slot-scope="{ row }">{{ row.jobNumber }}</template>
      </el-table-column>
      <el-table-column
        prop="academicYear"
        label="学年">
        <template slot-scope="{ row }">{{ row.academicYear }}</template>
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
        <template slot-scope="{ row }">{{ row.unit }}</template>
      </el-table-column>
      <el-table-column
        label="详情">
        <template slot-scope="{ row }">
        <el-button class="operation-button" type="primary" @click="showDetail(row)">详情</el-button>
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
      :total="totalCount">
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
import axios from 'axios'
export default {
  created () {
    this.fetchData()
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
    goBack () {
      this.$router.push('/')
    },
    goApply () {
      this.$router.push('/student/apply')
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
        this.formInline.unitOptions = Array.from(new Set(response.data.data))
        console.log(this.formInline.unitOptions)
        // 其他代码...
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
