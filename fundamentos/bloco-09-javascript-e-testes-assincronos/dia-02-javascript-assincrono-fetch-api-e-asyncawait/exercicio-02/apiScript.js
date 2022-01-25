// apiScript.js
const API_URL = 'https://api.coincap.io/v2/assets';

const fetchCoinList = () => fetch(API_URL)
  .then((response) => response.json())
  .then((data) => data);

window.onload = async () => {
  const { data } = await fetchCoinList();
  // document.querySelector('ol').innerText = res;
  data.filter((_, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      document.querySelector('ol').appendChild(newLi);
    });
};
