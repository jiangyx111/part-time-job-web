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
  <el-breadcrumb-item>教师-学生评分</el-breadcrumb-item>
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
          <el-menu-item index="1-3" @click="goReview">审批列表</el-menu-item>
          <el-menu-item index="1-4" @click="goComment">学生评分</el-menu-item>
        </el-menu-item-group>
    </el-menu>
    </div>
  </el-aside>
    <el-main>
        <el-button type="primary" @click="Export">导出</el-button>
<!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="data.list"
      tooltip-effect="dark"
      stripe="true"

      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        prop="name"
        label="姓名">
        <template slot-scope="{ row }">{{ row.name }}</template>
      </el-table-column>
      <el-table-column
        prop="positionTitle"
        label="岗位名称">
        <template slot-scope="{ row }">{{ row.positionTitle }}</template>
      </el-table-column>
      <el-table-column
        prop="positionType"
        label="岗位类型">
        <template slot-scope="{ row }">{{ row.positionType }}</template>
      </el-table-column>
      <el-table-column
        prop="startWorkDate"
        label="开始时间">
        <template slot-scope="{ row }">{{ row.startWorkDate }}</template>
      </el-table-column>

      <el-table-column
        prop="phone"
        label="联系电话">
        <template slot-scope="{ row }">{{ row.phone }}</template>
      </el-table-column>
      <el-table-column
        prop="academicYear"
        label="学年">
        <template slot-scope="{ row }">{{ row.academicYear }}</template>
      </el-table-column>
        <el-table-column prop="commentScore" label="评分">
          <template slot-scope="{ row }">
            <el-rate :value="row.commentScore" disabled ></el-rate>
          </template>
        </el-table-column>
      <el-table-column
        prop="comments"
        label="评价">
        <template slot-scope="{ row }">{{ row.comments }}</template>
      </el-table-column>
      <el-table-column
        label="点评" >
        <template slot-scope="{ row }">
        <el-button class="operation-button" type="primary" @click="goComment(row)">点评</el-button>
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
    </el-main>
    <el-dialog
      title="评价学生"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>
        <div class="block">
          <span class="demonstration" style="font-size: large;margin: 10px;">评分</span>
          <el-rate
            v-model="rate"
            :colors="colors"
            style="margin: 10px;">
          </el-rate>
        </div>
      </span>
      <span class="demonstration" style="font-size: large;margin: 10px;">评价</span>
      <el-input v-model="input" placeholder="请输入内容" style="margin: 10px;"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onComment">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</el-container>
</template>
<script>
import axios from 'axios'
import { Message } from 'element-ui'
export default {
  created () {
    this.fetchData()
  },
  name: 'HomeIndex',
  data () {
    return {
      tabPosition: 'left',
      dialogVisible: false,
      formInline: {
        unitOptions1: [
        {
        value:0,
        label:"未在岗",
        },{
        value:1,
        label:"已在岗",
        }  
        ],
        unitOptions2: [
        {
        value:0,
        label:"未审核",
        },{
        value:1,
        label:"审核通过",
        },{
        value:2,
        label:"审核失败",
        }    
        ],
        positionTitle: ''
      },
      data: {
        list: []
      },
      idTemp:'',
      input:'',
      rate:'',
      positionTitle: '',
      positionType: '',
      startWorkDate: '',
      bankCardNumber: '',
      phone: '',
      academicYear: '',
      onDutyStatus: '',
      reviewStatus: '',
      currentPage: '',
      pageNumber: 1,
      pageSize: 5,
      totalCount: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      id:''
    }
  },
  methods: {
    showDetail (row) {
      this.$router.push({
        path: '/review/detail/',
        query: {
          username: this.$route.query.username,
          jobId: row.jobId
        }
      })
    },
    goBack () {
      this.$router.push('/')
    },
    goStatistics () {
      this.$router.push({
        path: '/statistics2',
        query: {
          username: this.$route.query.username
        }
      })
    },
    goTotal () {
      this.$router.push({
        path: '/teacher/home',
        query: {
          username: this.$route.query.username
        }
      })
    },
    
    goReview () {
      this.$router.push({
        path: '/teacher/review',
        query: {
          username: this.$route.query.username
        }
      })
    },
    handleClose(done) {
        this.dialogVisible=false;
    },
    goComment (row) {
      this.idTemp=row.id,
      console.log(row.id),
      this.dialogVisible = true
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
    async onComment () {
      try{
        const response = await axios.post('http://localhost:8866/ptjs/applianceList/apply/modify', {
          jobId : this.idTemp,
          commentScore : this.rate,
          comments : this.input
        })
        Message.success("评价成功")
        this.dialogVisible=false;
        this.fetchData();
      } catch (error) {
        console.error(error)
      }
    },
    Export () {
      this.fetchExcel()
    },
    async fetchExcel () {
      try {
        const response = await axios.get('http://localhost:8866/ptjs/job/export', {
          responseType: 'arraybuffer' // 指定获取的数据类型为arraybuffer
        })

        // 处理从后端获取的数据，设置type值表示blob是一个Excel文件(XLSX)
        const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

        // 创建一个链接并指向可下载的Excel文件
        const url = window.URL.createObjectURL(blob)

        // 创建一个a标签并设置相关属性用于下载
        const a = document.createElement('a')
        a.href = url
        a.download = 'job_data.xlsx'

        // 将a标签添加到文档中并触发点击事件
        document.body.appendChild(a)
        a.click()

        // 下载完成后移除a标签和URL对象
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } catch (error) {
        console.error(error)
      }
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
    async fetchData () {
      try {
        const response = await axios.get('http://localhost:8866/ptjs/applianceList/apply/comment', {
          params: {
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
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
.red-text{
  color: red;
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
