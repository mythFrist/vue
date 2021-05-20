<template>
  <div id="main" class="isShow" style="height: 500px">

  </div>
</template>
<script>
const echarts = require('echarts')

export default {
	mounted() {
		this.initCharts()
		console.log(this)
	},
	data(){
	  return {
	    isShow: true,
			isShow2: false
		}
	},
	methods: {
		initCharts() {
			this.chart = echarts.init(this.$el)
			this.setOptions()
		},
		setOptions() {
			this.chart.setOption({
				title: {
					text: 'ECharts 入门示例'
				},
				tooltip: {},
				xAxis: {
					data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
				yAxis: {},
				series: [{
					name: '销量',
					type: 'bar',
					data: [5, 20, 36, 10, 10, 20]
				}]
			})
		}
	},
	watch:{'this.$el': function(){
	  console.log('cc')
	}}
}
</script>
<style scoped>
  isShow {
    width: 50%;
    height: 500px
  }

  isShow2 {
    width: 300px;
    height: 300px
  }
</style>
