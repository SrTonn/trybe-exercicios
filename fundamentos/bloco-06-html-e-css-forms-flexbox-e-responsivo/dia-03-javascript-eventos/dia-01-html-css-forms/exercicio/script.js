const selectState = document.querySelector('#state')
const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const btnSubmit = document.querySelector('#submit')
const divAnswer = document.querySelector('#answer')

function createTagOptions(state) {
  const option = document.createElement('option')
  option.innerText = state
  option.value = state
  selectState.appendChild(option)
}

stateOptions.forEach((state) => {
  createTagOptions(state)
})

function isInvalidName() {
  const input = document.querySelector('#name').value

  if (!input) {
    alert('O campo "nome" está vazio!')
    return true
  }
  return false
}

function submitForm(event) {
  event.preventDefault()
  console.log('event', event.target)

  if(isInvalidName()) return;
}

btnSubmit.addEventListener('click', submitForm)