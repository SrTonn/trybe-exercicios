const { createStore } = Redux;
const colorValue = document.querySelector('#value');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const randomBtn = document.querySelector('#random');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  const maxSize = state.colors.length - 1;
  const minSize = 0;
  switch (action.type) {
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index <= minSize ? maxSize : state.index - 1,
      };
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index >= maxSize ? 0 : state.index + 1,
      };
    case 'RANDOM_COLOR':
      return {
        ...state,
        index: Math.round(Math.random() * maxSize),
      };

    default:
      return state;
  }
};
const store = createStore(reducer);

previousBtn.addEventListener('click', () => store.dispatch({ type: 'PREVIOUS_COLOR' }));
nextBtn.addEventListener('click', () => store.dispatch({ type: 'NEXT_COLOR' }));
randomBtn.addEventListener('click', () => store.dispatch({ type: 'RANDOM_COLOR' }));

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorValue.innerText = colors[index];
  document.body.style = `background-color: ${colors[index]}`;
});
