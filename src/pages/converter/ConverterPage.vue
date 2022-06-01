<template>
  <div>
    <CurrencyChangingChart class="chart"/>
    <Converter />
  </div>
</template>

<script>
import Converter from './components/Converter';
import CurrencyChangingChart from './components/CurrencyChangingChart';

export default {
    name: 'converter-page',
    components: {
      Converter,
      CurrencyChangingChart
    }
}
</script>

<style scoped>
.chart {
  margin: auto;
  margin-top: 40px;
  max-width: 800px;
}
</style>