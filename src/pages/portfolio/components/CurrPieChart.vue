<template>
  <Pie :chart-data="chartData" :chart-options="chartOptions"/>
</template>

<script>
import { defineComponent } from 'vue'

import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

import {store} from '../../../store';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default defineComponent({
  name: 'PieChart',
  components: {
    Pie
  },
  data(){
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    chartData: () => {
      const labels = [];
      const backgroundColor = [];
      const data = [];
      for (let key in store.portfolio.portfolioData) {
        labels.push(key + '($)');
        backgroundColor.push(store.portfolio.color[key]);
        data.push(parseInt(store.portfolio.getCurrencyValue(key) * store.portfolio.rates[key] * 100) / 100);
      }
      return {
        labels,
        datasets:[{
          backgroundColor,
          data
        }],
      };
    }
  },
});
</script>