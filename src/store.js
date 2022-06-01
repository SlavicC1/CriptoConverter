import {reactive} from 'vue';
import PortfolioModel from './models/portfolio';

class Curr{
    constructor(value, currType){
        this.value = value;
        this.currType = currType;
    }

    exchange(curr){
        let tempV = curr.value;
        let tempT = curr.currType;
        curr.value = this.value;
        curr.currType = this.currType;
        this.value = tempV;
        this.currType = tempT;
    }
}

export const store = reactive({
    portfolio: new PortfolioModel(),
    currencyBeforeConvert: new Curr(0, 'BTC'), 
    currencyAfterConvert: new Curr(0, 'USD'), 
    currencyToAdd: new Curr(0, 'USD'),
});