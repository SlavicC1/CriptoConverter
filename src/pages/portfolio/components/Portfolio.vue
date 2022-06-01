<template>
  <div>
    <p v-for="(item, key) in items"
      v-bind:key="key"
    >
      <span>{{key}}</span>
      <span>{{item}}</span>
    </p>
    <p><span>Всего средств:</span><span>{{totalUSD}} $</span></p>
  </div>
</template>

<script>
import {store} from '../../../store';

export default {
  name: 'portfolio-list',
  computed: {
      totalUSD: store.portfolio.getPortfolioVoluemInUSD.bind(store.portfolio),
      items: store.portfolio.getCurrencyList.bind(store.portfolio),
  }
}
</script>

<style scoped>

p{
    font-size: 25px;
    margin: 5px;
    padding: 5px;
    border-bottom: 2px solid black;
    text-transform: uppercase;
}

span{
    margin-left: 50px;
}

p:last-child{
    margin-top: 50px;
    font-size: 20px;
}

p:last-child span{
    margin-left: 15px;
}

</style>