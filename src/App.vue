<template>
  <Header :pageRefs="mainNav" :nowIsOnPage="currentPath"/>
  <component :is="currentView" class="page"/>
</template>

<script>
import Header from './components/Header.vue';
import ConverterPage from './pages/converter/ConverterPage.vue';
import PortfolioPage from './pages/portfolio/PortfolioPage.vue';
import {store} from './store';

store.portfolio.setCurrencyValue('BTC', 0.01, 100000000, '#aa1','bitcoin');
store.portfolio.setCurrencyValue('ETH', 0.1, 100000000, '#11a', 'ethereum');
store.portfolio.setCurrencyValue('USD', 99.99, 100, '#1a1');

store.portfolio.updateRates();

store.portfolio.fetchDataToRatesChart();

const routes = {
  '/': ConverterPage,
  '/portfolio': PortfolioPage
}

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      currentPath: window.location.hash,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || null;
    },
    mainNav: () => [
      {
        ref: '#/',
        text: 'Конвертер',
      },
      {
        ref: '#/portfolio',
        text: 'Портфель',
      },
    ]
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
};

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
      -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
         -moz-animation: fadein 0.5s; /* Firefox < 16 */
          -ms-animation: fadein 0.5s; /* Internet Explorer */
           -o-animation: fadein 0.5s; /* Opera < 12.1 */
              animation: fadein 0.5s;
}

@keyframes fadein {
    from { opacity: 0.3; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0.3; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0.3; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0.3; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0.3; }
    to   { opacity: 1; }
}
</style>
