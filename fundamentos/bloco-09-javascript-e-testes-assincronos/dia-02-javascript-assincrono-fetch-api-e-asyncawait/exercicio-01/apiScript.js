// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => data);
};

window.onload = async () => {
  const { joke } = await fetchJoke();
  document.querySelector('h1').innerText = joke;
};
