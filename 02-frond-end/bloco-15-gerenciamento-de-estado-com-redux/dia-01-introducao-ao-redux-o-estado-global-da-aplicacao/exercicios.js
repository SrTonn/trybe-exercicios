const { createStore } = Redux;

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const reducer = (state = ESTADO_INICIAL) => state;
const store = createStore(reducer);

console.log('store=>', store.getState());
