<template>
    <div class="detail">
      <el-button type="primary" class="goback el-button--small" @click="goBack">返回</el-button>
      <div class="message">
        <table class="table_style">
          <tbody>
            <tr>
              <th colspan="4" style="text-align: left;">岗位信息</th>
            </tr>
            <tr>
              <th style="width: 15%;">学年：</th>
              <td style="width: 35%;">2022-2023学年</td>
              <th style="width: 15%;">部门名称：</th>
              <td style="width: 35%;">体育学院</td>
            </tr>
            <tr>
              <th style="width: 15%;">岗位名称：</th>
              <td colspan="3">2023-2024学年体育学院岗位助理</td>
            </tr>
            <tr>
              <th>岗位负责人：</th>
              <td>刘</td>
              <th>岗位负责人联系电话：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>岗位需求人数：</th>
              <td>刘</td>
              <th>每周工作时间：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>工作开始时间：</th>
              <td>刘</td>
              <th>工作结束时间：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>岗位类别：</th>
              <td>刘</td>
              <th>工资发放标准：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>岗位类型：</th>
              <td>刘</td>
              <th>岗位层次：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>岗位指导老师：</th>
              <td>刘</td>
              <th>工资预算：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>上学年岗位数：</th>
              <td>刘</td>
              <th>申请月数：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>需求月份：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>聘用方式：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>工作地点：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>岗位职责：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>岗位要求：</th>
              <td colspan="3">刘</td>
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
              <th style="width: 15%;">发布起始时间：</th>
              <td style="width: 35%;">2022-2023学年</td>
              <th style="width: 15%;">发布结束时间：</th>
              <td style="width: 35%;">体育学院</td>
            </tr>
            <tr>
              <th>性别限制：</th>
              <td>刘</td>
              <th>限制年龄：</th>
              <td>12312</td>
            </tr>
            <tr>
              <th>限困难生：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>限制院系：</th>
              <td colspan="3">刘</td>
            </tr>
            <tr>
              <th>限制专业：</th>
              <td colspan="3">刘</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
<script>
export default {
  name: 'HomeIndex',
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.push('/student/home')
    }
  }
}

</script>
  <style lang="scss" scoped>
//   .detail {
//     background-image: url('./login.jpg');
//   }
  .goback {
    margin-bottom: 15px;
    margin-left: 130px;
    margin-top: 15px;
  }
  .table_style {
    border-collapse: collapse;
    width: 80%;
    font-size: 11px;
    line-height: 0.75;
    transform: translateX(130px);
    background-color: white;
  }
  .table_style th{
    border: 1px solid black;
    padding: 8px;
    text-align: right;
    background-color: rgba(210, 213, 213, 0.626);
  }
  .table_style td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  </style>
