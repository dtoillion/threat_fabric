<template>
  <Echarts :option="chartOptions" :resizable="true" />
</template>

<script>
import Echarts from 'vue-echarts-v3/src/full.js';

let base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
const date = [];

const testData = [Math.random() * 300];
const testData2 = [Math.random() * 300];

for (let i = 1; i < 5000; i += 1) {
  const now = new Date(base += oneDay);
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  testData.push(Math.round((Math.random() - 0.5) * 20 + testData[i - 1]));
  testData2.push(Math.round((Math.random() - 0.5) * 20 + testData2[i - 1]));
}

export default {
  name: 'InfectedDevices',
  components: {
    Echarts,
  },
  data() {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'axis',
          position(pt) {
            return [pt[0], '10%'];
          },
        },
        title: {
          left: 'center',
          text: 'Threat Overview',
          top: 10,
        },
        grid: {
          left: '1%',
          right: '1%',
          bottom: '10%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
              title: {
                zoom: 'Zoom',
                back: 'Back',
              },
            },
            restore: { show: true, title: 'Reset' },
            saveAsImage: { show: true, title: 'Save as image' },
          },
          emphasis: {
            iconStyle: {
              borderColor: '#9ACA3C',
            },
          },
          iconStyle: {
            borderColor: '#233C45',
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10,
        }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#9ACA3C',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
        }],
        series: [
          {
            name: 'Infected Devices',
            type: 'line',
            stack: '1',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#F15722',
            },
            areaStyle: {
              color: '#FCC6AC',
            },
            data: testData,
          },
          {
            name: 'Rooted Devices',
            type: 'line',
            stack: '1',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#B27E9F',
            },
            areaStyle: {
              color: '#E5D4DF',
            },
            data: testData2,
          },
        ],
      },
    };
  },
};
</script>
