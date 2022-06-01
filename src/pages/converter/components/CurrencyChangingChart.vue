<template>
  <div>
    <Scatter :chart-data="chartData" :chart-options="chartOptions"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { Scatter } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

import {store} from '../../../store';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

export default defineComponent({
  name: 'ScatterChart',
  components: {
    Scatter
  },
  data(){
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point:{
            radius: 0
          }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 24
                    }
                }
            }
        },
        scales: {
          x: {
            ticks: {
              callback: function(value) {
                let date = new Date(value);
                return date.getDate() + '.' + (date.getMonth() < 10 ? '0' : '') + date.getMonth();
              }
            },
          }
        }
      }
    };
  },
  computed: {
    chartData: () => {
      return {
        datasets:[
        {
          label: "Курс " + store.currencyBeforeConvert.currType + " к $ за две недели",
          fill: false,
          borderColor: store.portfolio.color[store.currencyBeforeConvert.currType],
          backgroundColor: store.portfolio.color[store.currencyBeforeConvert.currType],
          showLine: true,
          data: store.portfolio.chartData,
        }]
      };
    }
  },
});
</script>