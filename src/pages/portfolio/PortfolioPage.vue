<template>
  <div class="container-portfolio-page">
    <div class="portfolio-wrapper">
      <Portfolo class="portfolio" />
      <ChangeCurrencyField  class="controls-wrapper"/>
    </div>
    <div class="pie-chart-wrapper">
      <CurrPieChart />
    </div>
  </div>
</template>

<script>
import Portfolo from './components/Portfolio';
import ChangeCurrencyField from './components/ChangeCurrencyField';
import CurrPieChart from './components/CurrPieChart';

export default {
  name: 'portfolio-page',
    components: {
    Portfolo,
    ChangeCurrencyField,
    CurrPieChart
  }
}
</script>

<style scoped>

.container-portfolio-page{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.controls-wrapper {
  margin: 50px auto;
  margin-bottom: 100px;
}

.portfolio{
    width: 400px;
    margin-top: 100px;
}

</style>