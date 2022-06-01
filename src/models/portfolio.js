export default class {
    constructor(){
        this.portfolioData = {};
        this.rates = {};
        this.cents = {};
        this.apiIds = {};
        this.color = {};
        this.allchartData = {};
        this.chartData = [];
    }

    
    setCurrencyValue(name, value, cents, color, id){
        this.portfolioData[name] = value;
        this.cents[name] = cents;
        this.color[name] = color;
        if(!this.rates[name]){
            this.rates[name] = 1;
        }
        if(id){
            this.apiIds[name] = id;
        }
    }

    getCurrencyValue(name){
        return parseInt(this.portfolioData[name] * this.cents[name]) / this.cents[name];
    }

    getCurrencyList(){
        let res = {};
        for(let key in this.portfolioData){
            res[key] = this.getCurrencyValue(key);
        }
        return res;
    }

    getPortfolioVoluemInUSD(){
        let summ = 0;
        for(let key in this.portfolioData){
            summ += this.portfolioData[key] * this.rates[key];
        }
        return parseInt(summ * 100) / 100;
    }

    addCurrencyValue(name, value){
        if(this.portfolioData[name].toString()){
            this.portfolioData[name] = +this.portfolioData[name] + +value > 0 ? +this.portfolioData[name] + +value : 0;
        }
    }

    createAPIRequestParams(){
        let res = [];
        for(let key in this.apiIds) {
            res.push(this.apiIds[key])
        }
        return res.join(',');
    }

    updateRates(){
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + this.createAPIRequestParams() + '&vs_currencies=usd')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for(let key in this.rates){
                if(this.apiIds[key]){
                    this.rates[key] = data[this.apiIds[key]]['usd'];
                }
            }
        });
    }

    fetchDataToRatesChart(){
        const now = Math.floor(Date.now() / 1000);
        const twoWeeksAgo = now - 1209600;

        for(let key in this.rates){
            if( key != 'USD' ){
                fetch('https://api.coingecko.com/api/v3/coins/' + this.apiIds[key] + '/market_chart/range?vs_currency=usd'
                + '&from=' + twoWeeksAgo + '&to=' + now)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.allchartData[key] = data.prices.map( el => {
                        return {
                            x: el[0],
                            y: el[1],
                        }
                    });
                });
            } else {
                let res = [];
                for(let i = twoWeeksAgo; i <= now; i+= 120960){
                    res.push({
                        x: i,
                        y: 1,
                    });
                }
                this.allchartData[key] = res;
            }
        }
    }

    getChartDataTo(curr){
        this.chartData = this.allchartData[curr];
    }
}