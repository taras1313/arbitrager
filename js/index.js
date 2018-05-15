(function() {
  function fromBtcToUsd() {
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.poloniex_btc').innerText =  data.USD;
      })
    const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.hitbtc_btc').innerText =  data.USD;
      })
  }


  fromBtcToUsd();
  document.querySelector('.refresh_price_1').addEventListener('click', fromBtcToUsd);




  function fromEthToUsd() {
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.poloniex_eth').innerText = data.USD;
      })
    const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.hitbtc_eth').innerText = data.USD;
      })
  }
  fromEthToUsd();
  document.querySelector('.refresh_price_2').addEventListener('click', fromEthToUsd);





  function fromBchToUsd() {
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.poloniex_bch').innerText = data.USD;
      })
    const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.hitbtc_bch').innerText = data.USD;
      })
  }
  fromBchToUsd();
  document.querySelector('.refresh_price_3').addEventListener('click', fromBchToUsd);



  function fromLtcToUsd() {
    const API_URL_POL = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD&e=Poloniex&extraParams=arbitrager';
    fetch(API_URL_POL)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.poloniex_ltc').innerText = data.USD;
      })
    const API_URL_HIT = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD&e=HitBtc&extraParams=arbitrager';
    fetch(API_URL_HIT)
      .then(response => response.json())
      .then(data => {
        document.querySelector('.hitbtc_ltc').innerText = data.USD  ;
      })
  }
  fromLtcToUsd();
  document.querySelector('.refresh_price_4').addEventListener('click', fromLtcToUsd);



function calculateDiff1() {
  const num1 = parseFloat(document.querySelector('.poloniex_btc').innerHTML);
  const num2 = parseFloat(document.querySelector('.hitbtc_btc').innerHTML);

  if (num1 > num2) {
    document.querySelector('.difference1').innerHTML = num1 - num2;
  }
  else {
    document.querySelector('.difference1').innerHTML = num2 - num1;

  }
}

document.querySelector('.calculate1').addEventListener('click', calculateDiff1);

function calculateDiff2() {
  const num1 = parseFloat(document.querySelector('.poloniex_eth').innerHTML);
  const num2 = parseFloat(document.querySelector('.hitbtc_eth').innerHTML);

  if (num1 > num2) {
    document.querySelector('.difference2').innerHTML = num1 - num2;
  }
  else {
    document.querySelector('.difference2').innerHTML = num2 - num1;

  }
}

document.querySelector('.calculate2').addEventListener('click', calculateDiff2);

function calculateDiff3() {
  const num1 = parseFloat(document.querySelector('.poloniex_bch').innerHTML);
  const num2 = parseFloat(document.querySelector('.hitbtc_bch').innerHTML);

  if (num1 > num2) {
    document.querySelector('.difference3').innerHTML = num1 - num2;
  }
  else {
    document.querySelector('.difference3').innerHTML = num2 - num1;

  }
}

document.querySelector('.calculate3').addEventListener('click', calculateDiff3);

function calculateDiff4() {
  const num1 = parseFloat(document.querySelector('.poloniex_ltc').innerHTML);
  const num2 = parseFloat(document.querySelector('.hitbtc_ltc').innerHTML);

  if (num1 > num2) {
    document.querySelector('.difference4').innerHTML = num1 - num2;
  }
  else {
    document.querySelector('.difference4').innerHTML = num2 - num1;

  }
}

document.querySelector('.calculate4').addEventListener('click', calculateDiff4);


$(function() {
    $('.smooth').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 500);
        }
    });
});

})();