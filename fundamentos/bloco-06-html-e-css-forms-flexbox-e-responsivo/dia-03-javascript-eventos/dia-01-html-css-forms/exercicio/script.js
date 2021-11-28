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

function isInvalidDate() {
  const input = document.querySelector('#date').value
  // Regex para buscar o formato dd/mm/aaa
  const regexCatchFormat = /^(\d{2}\/){2}\d{4}$/
  // Regex para buscar um intervalo de numero de (01 a 31)
  const regexCatchDay = /^(3[0-1]|[1-2]\d|[0][1-9])\//
  // Regex para buscar um intervalo de numero de (01 a 12)
  const regexCatchMonth = /\/(1[0-2]|0[1-9])\//
  // Regex para buscar um intervalo de numero de (1908 a 2021)
  const regexCatchYear = /\/(190[8-9]|19[1-9]\d|20[0-1]\d|202[0-1])$/
  let isInvalid = false

  if (!regexCatchFormat.test(input)) {
    isInvalid = true
    alert('Formato da data inválida!')
    return;
  }

  if (!regexCatchDay.test(input)) {
    isInvalid = true
    alert('Dia inválido!')
    return;
  }

  if (!regexCatchMonth.test(input)) {
    isInvalid = true
    alert('Mês inválido!')
    return;
  }

  if (!regexCatchYear.test(input)) {
    isInvalid = true
    alert('Ano inválido!')
    return;
  }

  return isInvalid
}

function submitForm(event) {
  event.preventDefault()
  console.log('event', event.target)

  if(isInvalidName()) return;
  if(isInvalidDate()) return;
}

btnSubmit.addEventListener('click', submitForm)