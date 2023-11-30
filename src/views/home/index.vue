<template>
  <div class="home">
    <div class="menu">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="selectandtable">
    <div class="select">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="单位">
        <el-select v-model="formInline.user" placeholder="单位">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
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
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="positionTitle"
      label="岗位名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="head"
      label="负责人">
    </el-table-column>
    <el-table-column
      prop="positionNature"
      label="岗位性质">
    </el-table-column>
    <el-table-column
      prop="positionType"
      label="岗位类型">
    </el-table-column>
    <el-table-column
      prop="requireNumber"
      label="需要人数">
    </el-table-column>
    <el-table-column
      prop="applicantNumber"
      label="申请人数">
    </el-table-column>
    <el-table-column
      prop="jobNumber"
      label="在岗人数">
    </el-table-column>
    <el-table-column
      prop="academicYear"
      label="学年">
    </el-table-column>
    <el-table-column
      prop="unit"
      label="单位">
    </el-table-column>
  </el-table>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
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
.home {
  display: flex;
}
.menu {
  width: 200px;
}
.select {
  margin-bottom: 20pxS;
}
.selectandtable {
  flex: 1;
  padding: 20px;
}
</style>
