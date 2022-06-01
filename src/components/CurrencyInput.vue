<template>
    <div class="container-input">
        <input type="number" v-model="currencyStore.value" step="any">
        <select v-model="currencyStore.currType" @change="change">
            <option v-for="(item, key) in items(block)"
                v-bind:key="key"
                v-bind:value="key">
                {{key}}
            </option>
        </select>
    </div>
</template>

<script>
import {store} from '../store';

export default {
    name: 'currency-input',
    props: ['currStore', 'block', 'change'],
    data(){
        return {
            currencyStore: this.currStore,
            items: (block) => {
                const res = {}
                for(let key in store.portfolio.portfolioData){
                    if(key != block)
                        res[key] = true;
                }
                return res;
            }
        }
    }
}
</script>

<style scoped>
.container-input {
    width: 100%;
    display: flex;
    flex-direction: row;
}

input {
    float: left;
    height: 40px;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 0;
    box-shadow: none;
}

select {
    height: 40px;
    font-size: 20px;
    position: relative;
    width: 80px;
    border: 1px solid black;
    border-radius: 0;
    box-shadow: none;
}

.container-input:hover > input,
.container-input:hover > select,
input:focus + select,
input:focus {
    outline: 2px solid black;
}

</style>