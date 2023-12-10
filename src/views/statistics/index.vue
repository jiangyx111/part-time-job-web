<template>
  <div>
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
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'statisticsIndex',
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
  width: 400px;
  height: 300px;
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
  /* margin-top: 0px; */
  /* margin-left: 50px; */
}

.chart3 {
  position: absolute;
  bottom: 0;
  left: 0;
  /* margin-top: 0px; */
  /* margin-left: 10px; */
}

.chart4 {
  position: absolute;
  bottom: 0;
  right: 0;
  /* margin-top: 0px; */
  /* margin-left: 700px; */
}
</style>
