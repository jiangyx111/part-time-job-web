<template>
  <div class="home">
    <div class="menu">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="全部岗位">全部岗位</el-tab-pane>
      <el-tab-pane label="剩余岗位">剩余岗位</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      </el-tabs>
    </div>
    <div class="selectandtable">
    <div class="header">
      <div class="header-content">
        <div class="content">
          勤工助学管理系统
        </div>
        <el-button type="primary" class="back el-button--small" @click="goBack">退出登录</el-button>
      </div>
    </div>
    <div class="select">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="单位">
        <el-select v-model="formInline.unit" placeholder="单位">
          <el-option
          v-for="item in unit"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="岗位名称">
      <el-input v-model="formInline.region" placeholder="岗位名称"></el-input>
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
        label="修改">
        <template slot-scope="{ row }">
        <el-button class="operation-button" type="primary" @click="showModifyDialog(row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
        <!-- 分页器 -->
    <div style="display: flex;justify-content: flex-end; padding: 20px 20px 0 0">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNumber"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
    </div>
  </div>
</div>
</div>
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
        unit: '',
        region: ''
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
      pageSize: 10,
      totalCount: null
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    },
    async fetchData () {
      try {
        const response = await axios.get('http://localhost:8866/ptjs/job/page', {
          params: {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            name: this.name, // 姓名查询条件
            unit: this.formInline.unit, // 根据下拉选择框的值设置查询条件
            region: this.formInline.region
          }
        })
        console.log(response.data)
        this.data = response.data.data
        this.totalCount = response.data.totalCount
      } catch (error) {
        console.error(error)
      }
    },
    onSubmit () {
      this.fetchData() // 调用 fetchData 方法获取数据
    },
    handleSelectionChange () {},
    // 每页条数改变时触发 选择一页显示多少行
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.pageSize = val
    },
    // 当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  align-items: flex-start;
  background-image: url('./login.jpg'); /* 设置背景图 */
  background-size: cover;
  background-position: center;
  position: relative; /* 设置为相对定位 */
}
.menu {
  display: flex;
  flex-direction: column;
  margin-top: 70px; /* 向下调整位置 */
  font-weight: bold;
}
.select {
  margin-bottom: 20pxS;
}
.selectandtable {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.back {
  margin-bottom: 20px;
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
</style>
