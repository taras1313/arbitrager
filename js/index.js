(function() {
  function fromBtcToUsd(){
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.poloniex_btc').innerText = data.USD + (' $');
      } )
      const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.hitbtc_btc').innerText = data.USD + (' $');
      } )
  }
   

   
document.querySelector('.refresh_price_1').addEventListener('click', fromBtcToUsd);
})();


(function() {
  function fromEthToUsd(){
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.poloniex_eth').innerText = data.USD + (' $');
      } )
      const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.hitbtc_eth').innerText = data.USD + (' $');
      } )
  }
document.querySelector('.refresh_price_2').addEventListener('click', fromEthToUsd);
})();



(function() {
  function fromBchToUsd(){
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.poloniex_bch').innerText = data.USD + (' $');
      } )
      const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.hitbtc_bch').innerText = data.USD + (' $');
      } )
  }
document.querySelector('.refresh_price_3').addEventListener('click', fromBchToUsd);
})();

(function() {
  function fromLtcToUsd(){
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.poloniex_ltc').innerText = data.USD + (' $');
      } )
      const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then( response => response.json())
      .then( data => {
        document.querySelector('.hitbtc_ltc').innerText = data.USD + (' $');
      } )
  }
document.querySelector('.refresh_price_4').addEventListener('click', fromLtcToUsd);
})();


function calculateDiff1() {
  const num1 = document.querySelector('.poloniex_btc').innerHTML;
  const num2 = document.querySelector('.hitbtc_btc').innerHTML;
  
    if (+num1 > +num2) {
    document.querySelector('.difference1').innerHTML = +num1 - +num2;
  } else {
    document.querySelector('.difference1').innerHTML = +num2 - +num1;

  }
}

document.querySelector('.calculate1').addEventListener('click', calculateDiff1);