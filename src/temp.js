var exchangeTo = {};
var currency = 1000;
  var errorObj = {
    error : "You are rich, my friend! We don't have so much coins for exchange"
  };
  var emptyObj = {};

  var typeCoins = [50, 25, 10, 5, 1];
  var coins = [];
  var tempCoinsArr = [];

  if (currency === 0) {
    return emptyObj;
  } else if (currency > 10000) {
      return errorObj;
  } else {
    for (var i = 0; i < typeCoins.length; i++) {
      tempCoinsArr = takeCoins(currency, typeCoins[i]);
      coins.push(tempCoinsArr[0]);
      currency = tempCoinsArr[1];
      tempCoinsArr.length = 0;
    }
  }
  var typeLetCoin = ["H", "Q", "D", "N", "P"];
  for (var i = 0; i < coins.length; i++) {
    if (coins[i] > 0) {
      exchangeTo[typeLetCoin[i]] = coins[i];
    }
  }
  console.log(exchangeTo);
  return exchangeTo;


function takeCoins(currency, coinValue) {
var remainder =  currency % coinValue;
var arr = [];
arr.push((currency - remainder) / coinValue);
arr.push(remainder);
return arr;
}
