<template>
  <div class="ApplyDetail">
    <el-button type="primary" class="goback el-button--small" @click="goBack">返回</el-button>
    <div class="message">
      <table class="table_style">
        <tbody>
          <tr>
            <th colspan="4" style="text-align: left;">审批情况</th>
          </tr>
          <tr>
            <th style="width: 15%;">用人单位审批状态：</th>
            <td style="width: 35%;">{{ jobInfo.reviewStatus}}</td>
            <th style="width: 15%;">审批时间：</th>
            <td style="width: 35%;">{{ jobInfo.reviewDateTime}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">审批人：</th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th style="width: 15%;">审批理由：</th>
            <td colspan="3">{{ jobInfo.reviewReason}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">当前审核状态：</th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th colspan="4" style="text-align: left;">申请岗位信息</th>
          </tr>
          <tr>
            <th style="width: 15%;">学年：</th>
            <td colspan="3">{{ jobInfo.academicYear}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">单位名称：</th>
            <td style="width: 35%;">{{ jobInfo.unit}}</td>
            <th style="width: 15%;">岗位名称：</th>
            <td style="width: 35%;">{{ jobInfo.positionTitle}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">岗位类型：</th>
            <td style="width: 35%;">{{ jobInfo.positionType}}</td>
            <th style="width: 15%;">岗位层次：</th>
            <td style="width: 35%;">{{ jobInfo.positionLevel}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">工作开始时间：</th>
            <td style="width: 35%;">{{ jobInfo.startWorkDate}}</td>
            <th style="width: 15%;">工作结束时间：</th>
            <td style="width: 35%;">{{ jobInfo.endWorkDate}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">每周工作时间：</th>
            <td style="width: 35%;">{{ jobInfo.workingWeek}}</td>
            <th style="width: 15%;">工资发放标准：</th>
            <td style="width: 35%;">{{ jobInfo.salary}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">岗位指导老师：</th>
            <td style="width: 35%;">{{ jobInfo.teacher}}</td>
            <th style="width: 15%;">工资预算：</th>
            <td style="width: 35%;">{{ jobInfo.budget}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">上学年岗位数：</th>
            <td style="width: 35%;">{{ jobInfo.numberLastYear}}</td>
            <th style="width: 15%;">申请月数：</th>
            <td style="width: 35%;">{{ jobInfo.applyMonth}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">需求月份：</th>
            <td colspan="3">{{ jobInfo.demandMonth}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">聘用方式：</th>
            <td colspan="3">{{ jobInfo.hireType}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">工作地点：</th>
            <td colspan="3">{{ jobInfo.workPlace}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">岗位职责：</th>
            <td colspan="3">{{ jobInfo.positionDuty}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">岗位要求：</th>
            <td colspan="3">{{ jobInfo.positionDemand}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">岗位需求人数：</th>
            <td colspan="3">{{ jobInfo.requireNumber}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">申请人数：</th>
            <td colspan="3">{{ jobInfo.applyNumber}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">审核通过人数：</th>
            <td colspan="3">{{ jobInfo.passNumber}}</td>
          </tr>
          <tr>
            <th colspan="4" style="text-align: left;">学生申请信息</th>
          </tr>
          <tr>
            <th style="width: 15%;">学号：</th>
            <td style="width: 35%;">{{ jobInfo.classNumber}}</td>
            <th style="width: 15%;">姓名：</th>
            <td style="width: 35%;">{{ jobInfo.name}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">院系：</th>
            <td style="width: 35%;"></td>
            <th style="width: 15%;">专业：</th>
            <td style="width: 35%;">{{ jobInfo.major}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">年级：</th>
            <td style="width: 35%;"></td>
            <th style="width: 15%;">班级：</th>
            <td style="width: 35%;">{{ jobInfo.classes}}</td>
          </tr>
          <tr>
            <th style="width: 15%;">联系电话：</th>
            <td style="width: 35%;">
                <input type="text" v-model="phoneNumber">
                <span class="required-indicator" v-show="!phoneNumber"> *</span>
            </td>
            <th style="width: 15%;">银行卡号：</th>
            <td style="width: 35%;">
                <input type="text" v-model="bankCardNumber">
                <span class="required-indicator" v-show="!phoneNumber"> *</span>
            </td>
          </tr>
          <tr>
            <th style="width: 15%;">QQ：</th>
            <td colspan="3">
                <input type="text" v-model="qqNumber">
            </td>
          </tr>
          <tr>
            <th style="width: 15%;">本学年是否认定为家庭经济困难生：</th>
            <td colspan="3">
                <label>
                    <input type="radio" value="是" v-model="economicDifficulties"> 是
                </label>
                <label>
                    <input type="radio" value="否" v-model="economicDifficulties"> 否
                </label>
            </td>
          </tr>
          <tr>
            <th style="width: 15%;">上学期成绩情况：</th>
            <td colspan="3">
                <label>必修科目数：</label>
                <input type="text" v-model="requireSubjectsNumber">
                <label>平均分：</label>
                <input type="text" v-model="averageScore">
                <label>补考科目数：</label>
                <input type="text" v-model="makeupSubjectNumber">
            </td>
          </tr>
          <tr>
            <th style="width: 15%;">有何特长：</th>
            <td colspan="3"></td>
          </tr>
          <tr>
            <th style="width: 15%;">申请理由：</th>
            <td colspan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
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
    goback () {
      this.$router.push('/student/apply')
    },
    async fetchData () {
      try {
        console.log('created')
        const url = 'http://localhost:8866/ptjs/applianceList/apply/1'
        console.log(url)
        const response = await axios.get(url)
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
  border: 1px solid rgb(180, 178, 178);
  padding: 8px;
  text-align: right;
  background-color: rgba(210, 213, 213, 0.626);
}
.table_style td {
  border: 1px solid rgb(180, 178, 178);
  padding: 8px;
  text-align: left;
}
.required-indicator {
  color: red;
}
</style>
