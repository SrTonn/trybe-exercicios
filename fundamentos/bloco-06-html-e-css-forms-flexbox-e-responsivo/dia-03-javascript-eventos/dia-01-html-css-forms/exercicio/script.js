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
  const input = document.querySelector('#name')

  if (!input.value) {
    alert('O campo "nome" está vazio!')
    input.focus()
    return true
  }
  return false
}

function isInvalidEmail() {
  const input = document.querySelector('#email')
  const regexCatchEmailFormat = /^\w+@[a-z]+\.[a-z]{2,3}$/i

  if (!regexCatchEmailFormat.test(input.value)) {
    alert('Formato Inválido!\nTente o seguinte formato: nome@dominio.com')
    input.focus()
    return true
  }

  if (!input.value) {
    alert('Campo "e-mail" obrigatório!')
    input.focus()
    return true
  }
  return false
}

function isInvalidDate() {
  const input = document.querySelector('#date')
  // Regex para buscar o formato dd/mm/aaa
  const regexCatchFormat = /^(\d{2}\/){2}\d{4}$/
  // Regex para buscar um intervalo de numero de (01 a 31)
  const regexCatchDay = /^(3[0-1]|[1-2]\d|[0][1-9])\//
  // Regex para buscar um intervalo de numero de (01 a 12)
  const regexCatchMonth = /\/(1[0-2]|0[1-9])\//
  // Regex para buscar um intervalo de numero de (1908 a 2021)
  const regexCatchYear = /\/(190[8-9]|19[1-9]\d|20[0-1]\d|202[0-1])$/

  if (!regexCatchFormat.test(input.value)) {
    alert('Formato da data inválida!')
    input.focus()
    return true;
  }

  if (!regexCatchDay.test(input.value)) {
    alert('Dia inválido!')
    input.focus()
    return true;
  }

  if (!regexCatchMonth.test(input.value)) {
    alert('Mês inválido!')
    input.focus()
    return true;
  }

  if (!regexCatchYear.test(input.value)) {
    alert('Ano inválido!')
    input.focus()
    return true;
  }
  
  return false
}

function isInvalidCpf() {
  const input = document.querySelector('#cpf')
  
  const regexCatch11Number = /^\d{11}$/
  
  if(!regexCatch11Number.test(input.value)) {
    alert('Cpf inválido!')
    input.focus()
    return true;
  }
  return false;
}

function submitForm(event) {
  event.preventDefault()

  if(isInvalidName()) return;
  if(isInvalidEmail()) return;
  if(isInvalidCpf()) return;
  if(isInvalidDate()) return;
}

btnSubmit.addEventListener('click', submitForm)