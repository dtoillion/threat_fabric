<template>
  <Echarts :option="chartOptions" :resizable="true" />
</template>

<script>
import Echarts from 'vue-echarts-v3/src/full.js';

export default {
  name: 'InfectedDevicesPerDay',
  components: {
    Echarts,
  },
  data() {
    return {
      chartOptions: {
        textStyle: {
          color: '#233C45',
        },
        title: {
          text: 'Infected Devices Per Day',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#233C45',
          },
        },
        itemStyle: {
          color: '#BB6C42',
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
