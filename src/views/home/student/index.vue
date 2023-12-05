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
        <el-select v-model="unit" placeholder="单位">
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
    </div>
    <div class="table">
    <el-table
    :data="tableData"
    height="400"
    border
    style="width: 100%">
    <el-table-column
      prop="positionTitle"
      label="岗位名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="head"
      label="负责人"
      width="100">
    </el-table-column>
    <el-table-column
      prop="positionNature"
      label="岗位性质"
      width="100">
    </el-table-column>
    <el-table-column
      prop="positionType"
      label="岗位类型"
      width="100">
    </el-table-column>
    <el-table-column
      prop="requireNumber"
      label="需要人数"
      width="100">
    </el-table-column>
    <el-table-column
      prop="applicantNumber"
      label="申请人数"
      width="100">
    </el-table-column>
    <el-table-column
      prop="jobNumber"
      label="在岗人数"
      width="100">
    </el-table-column>
    <el-table-column
      prop="academicYear"
      label="学年"
      width="100">
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位"
      width="100">
    </el-table-column>
  </el-table>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'HomeIndex',
  data () {
    return {
      tabPosition: 'left',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    },
    fetchData () {
      const url = 'http://localhost/ptjs/job/page'
      axios.get(url, {
        params: {
          unit: this.formInline.unit, // 根据下拉选择框的值设置查询条件
          region: this.formInline.region
        }
      })
        .then(response => {
          this.tableData = response.data.map(item => ({
            id: item.id,
            positionTitle: item.positionTitle,
            head: item.head,
            positionNature: item.positionNature,
            positionType: item.positionType,
            requireNumber: item.requireNumber,
            applicantNumber: item.applicantNumber,
            jobNumber: item.jobNumber,
            academicYear: item.academicYear,
            unit: item.unit
          }))
        })
        .catch(error => {
          console.error('请求数据失败:', error)
        })
    },
    onSubmit () {
      this.fetchData() // 调用 fetchData 方法获取数据
    },
    mounted () {
      this.fetchData()
    },
    created () {
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
