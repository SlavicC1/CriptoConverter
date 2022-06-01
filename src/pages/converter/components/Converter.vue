<template>
  <div class="container-converter">
    <leftInput :currStore="leftCurrStore" :block="leftBlock" :change="change" class="input-field" /> {{leftCurrency}}
    <button type="button" @click="exchange">
        <img :src="arrows">
    </button>
    <rightInput :currStore="rightCurrStore" :block="rightBlock" :change="change" class="input-field" /> {{rightCurrency}}
  </div>
</template>

<script>
import CurrencyInput from '../../../components/CurrencyInput';
import {store} from '../../../store';
import arrows from '../../../assets/arrows.png';

export default {
    name: 'converter-input-field',
    data(){
        return {
            leftCurrStore: store.currencyBeforeConvert,
            rightCurrStore: store.currencyAfterConvert,
            arrows,
            exchange: () => {
                store.currencyAfterConvert.exchange( store.currencyBeforeConvert );
            },
        };
    },
    components: {
        leftInput: Object.assign({},CurrencyInput),
        rightInput: Object.assign({},CurrencyInput),
    },
    computed: {
        leftCurrency: () => {
        store.currencyAfterConvert.value = (store.currencyBeforeConvert.value 
                * store.portfolio.rates[store.currencyBeforeConvert.currType]
                / store.portfolio.rates[store.currencyAfterConvert.currType]);
        }, 
        rightCurrency: () => {
            store.currencyBeforeConvert.value = (store.currencyAfterConvert.value 
                * store.portfolio.rates[store.currencyAfterConvert.currType]
                / store.portfolio.rates[store.currencyBeforeConvert.currType]);
        },
        leftBlock: () => store.currencyAfterConvert.currType,
        rightBlock: () => store.currencyBeforeConvert.currType,
        change: () => store.portfolio.getChartDataTo.bind(store.portfolio)(store.currencyBeforeConvert.currType, store.currencyAfterConvert.currType)
    }
}
</script>

<style scoped>

.container-converter {
    margin: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    display: block;
    background: white;
    padding: 0;
    border: none;
    margin: 0 20px;
}

.input-field {
    width: 300px;
}

@media (max-width: 750px) {
    .container-converter {
        flex-direction: column;
    }
}
</style>