const selectState = document.querySelector('#state')
const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function createTagOptions(state) {
  const option = document.createElement('option')
  option.innerText = state
  option.value = state
  selectState.appendChild(option)
}
stateOptions.forEach((state) => {
  createTagOptions(state)
})