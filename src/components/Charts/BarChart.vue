<template>
  <Echarts :option="chartOptions" :resizable="true" />
</template>

<script>
import Echarts from 'vue-echarts-v3/src/full.js';

export default {
  name: 'BarChart',
  components: {
    Echarts,
  },
  data() {
    return {
      chartOptions: {
        backgroundColor: '#2c343c',
        textStyle: {
          color: '#F1F1F1',
        },
        title: {
          text: 'Customized Pie',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#F1F1F1',
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',

        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        }],
      },
    };
  },
};
</script>
