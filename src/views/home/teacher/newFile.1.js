import axios from 'axios';

export default (await import('vue')).defineComponent({
created() {
this.fetchData();
this.fetchUnit();
},

name: 'HomeIndex',
data() {
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
};
},
methods: {
goBack() {
this.$router.push('/');
},
goApply() {
this.$router.push('/student/apply');
},

handlePhoneIconClick() {
const h = this.$createElement;

this.$notify({
title: '客服联系方式',
message: h('div', { style: 'color: teal' }, [
'联系人：计算机能力有限小组',
'联系电话：189-XXXX-XXXX'
].map(text => h('div', [text, h('br')])))
});
},
handleSwitchIconClick() {
this.$message({
message: '切换身份成功！',
type: 'success'
});
// 切换身份逻辑
},
handleSelectionChange(val) {
console.log(val);
this.multipleSelection = val;
},
handleSizeChange(val) {
console.log(`每页 ${val} 条`);
this.pageSize = val;
this.fetchData();
},
handleCurrentChange(val) {
console.log(`当前页: ${val}`);
this.pageNumber = val;
this.fetchData();
},
handleOpen(key, keyPath) {
console.log(key, keyPath);
},
handleClose(key, keyPath) {
console.log(key, keyPath);
},
async fetchData() {
try {
const response = await axios.get('http://localhost:8866/ptjs/job/page', {
params: {
pageNumber: this.pageNumber,
pageSize: this.pageSize,
name: this.name, // 姓名查询条件
unit: this.formInline.unit, // 根据下拉选择框的值设置查询条件
positionTitle: this.formInline.positionTitle
}
});
console.log(response.data);
this.data = response.data.data;
this.totalCount = response.data.totalCount;
} catch (error) {
console.error(error);
}
},
fetchUnit() {
axios
.get('/api/units')
.then(response => {
console.log(response.data);
this.formInline.unitOptions = response.data;
})
.catch(error => {
console.log(error);
});
},
onSubmit() {
this.fetchData();
},
showDetail(row) {
this.$router.push(`/teacher/detail/${row.id}`);
},
edit(row) {
// 修改岗位的逻辑
},
remove(row) {
// 删除岗位的逻辑
},
create() {
// 处理新建按钮点击事件的逻辑
}
}
});
