<template>
  <div class="container-changer">
    <CurrInput :currStore="currencyToAdd"/>
    <div class="controls">
        <button type="button" @click="action(currencyToAdd.currType, currencyToAdd.value)">
            Добавить
        </button>
        <button type="button" @click="action(currencyToAdd.currType, -currencyToAdd.value)">
            Отнять
        </button>
    </div>
  </div>
</template>

<script>
import CurrencyInput from '../../../components/CurrencyInput';
import {store} from '../../../store';

export default {
    name: 'portfolio-list-button',
    data(){
        return {
            action: store.portfolio.addCurrencyValue.bind(store.portfolio),
            currencyToAdd: store.currencyToAdd,
        };
    },
    components: {
        CurrInput: Object.assign({},CurrencyInput),
    }
}
</script>

<style scoped>

.container-changer {
    width: 300px;
}

.controls {
    width: 100%;
    display:flex;
    justify-content: space-between;
}

button {
    display: block;
    background: white;
    font-size: 20px;
    padding: 5px;
    margin: 10px;
    width: 120px;
}

button:hover {
    transform: scale(1.05);
}

button:active {
    transform: scale(1);
}

</style>