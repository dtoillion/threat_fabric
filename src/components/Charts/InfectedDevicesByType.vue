<template>
  <Echarts :option="chartOptions" :resizable="true" />
</template>

<script>
import Echarts from 'vue-echarts-v3/src/full.js';

export default {
  name: 'InfectedDevicesByType',
  components: {
    Echarts,
  },
  data() {
    return {
      chartOptions: {
        title: {
          text: 'Infected Devices By Type',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#233C45',
          },
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        series: [
          {
            name: 'Device',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Android' },
              { value: 310, name: 'iOS' },
              { value: 274, name: 'Windows' },
              { value: 235, name: 'Linux' },
              { value: 400, name: 'macOS' },
            ].sort((a, b) => a.value - b.value),
            roseType: 'radius',
            label: {
              color: '#233C45',
            },
            labelLine: {
              lineStyle: {
                color: '#233C45',
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: '#FABC57',
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
          },
        ],
      },
    };
  },
};
</script>
