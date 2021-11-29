const selectState = document.querySelector('#state')
const stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const btnSubmit = document.querySelector('#submit')
const divAnswer = document.querySelector('#answer')
const tagUl = document.createElement('ul')
let errorList = []

function createTagOptions(state) {
  const option = document.createElement('option')
  option.innerText = state
  option.value = state
  selectState.appendChild(option)
}

stateOptions.forEach((state) => {
  createTagOptions(state)
})

function createLi(liContent, parentNode = tagUl) {
  const li = document.createElement('li')
  li.innerText = liContent
  li.className = 'incorrectAnswer'
  parentNode.appendChild(li)
}

function isInvalidName() {
  const input = document.querySelector('#name')
  const msgError = 'O campo "nome" está vazio!'

  const regexCatchAnyLetter = /[a-z]+/i
  
  if (!regexCatchAnyLetter.test(input.value)) {
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }

  return false
}

function isInvalidEmail() {
  const input = document.querySelector('#email')
  const regexCatchEmailFormat = /^\w+@[a-z]+\.[a-z]{2,3}$/i
  
  if (!regexCatchEmailFormat.test(input.value)) {
    const msgError = 'Formato Inválido! Tente o seguinte formato: nome@dominio.com'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }

  if (!input.value) {
    const msgError = 'Campo "e-mail" obrigatório!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }

  return false
}

function isInvalidCpf() {
  const input = document.querySelector('#cpf')

  const regexCatch11Number = /^\d{11}$/
  const msgError = 'Cpf inválido!'
  
  if(!regexCatch11Number.test(input.value)) {
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  return false;
}

function isInvalidAddres() {
  const input = document.querySelector('#addres')
  const regexCatchMinWord = /^[a-z]{2,10}\.?\s\w{1,}/i
  
  if (!regexCatchMinWord.test(input.value)) {
    const msgError = 'Endereço incompleto!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }
  
  if (!input.value) {
    const msgError = 'Campo de endereço vazio!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  return false;
}

function isInvalidCity() {
  const input = document.querySelector('#city')
  const regexCatchMinWord = /[a-z]{2,}/i
  
  if (!input.value) {
    const msgError = 'O campo "cidade" está vazio!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }
  
  if (!regexCatchMinWord.test(input.value)) {
    const msgError = 'Cidade inválida!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  return false
}

function isInvalidState() {
  const input = document.querySelector('#state')
  const msgError = 'Selecione um estado!'

  if(input.value === '--') {
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  return false
}

function complementChosen() {
  const radixHouse = document.querySelector('#house')
  const radixAp = document.querySelector('#ap')

  return radixAp.checked ? radixAp.value : radixHouse.value
}

function isInvalidResume() {
  const input = document.querySelector('#resume')
  const regexCatchMinWord = /\w{5,}/i
  
  if (!input.value) {
    const msgError = 'O campo "resumo" está vazio!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }
  
  if (!regexCatchMinWord.test(input.value)) {
    const msgError = 'resumo do currículo incompleto!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }
  
  return false
}
function isInvalidJobRole() {
  const input = document.querySelector('#job-role')
  const regexCatchMinWord = /\w{5,}/i
  
  if (!input.value) {
    const msgError = 'O campo "cargo" está vazio!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }
  
  if (!regexCatchMinWord.test(input.value)) {
    const msgError = 'resumo do cargo incompleto!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }
  
  return false
}
function isInvalidDescription() {
  const input = document.querySelector('#description')
  const regexCatchMinWord = /\w{3,}/i
  
  if (!input.value) {
    const msgError = 'O campo "descrição" está vazio!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true
  }
  
  if (!regexCatchMinWord.test(input.value)) {
    const msgError = 'Descrição incompleta!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
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
    const msgError = 'Formato da data inválida!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  if (!regexCatchDay.test(input.value)) {
    const msgError = 'Dia inválido!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  if (!regexCatchMonth.test(input.value)) {
    const msgError = 'Mês inválido!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  if (!regexCatchYear.test(input.value)) {
    const msgError = 'Ano inválido!'
    alert(msgError)
    errorList.push(msgError)
    input.focus()
    return true;
  }

  return false
}

function submitForm(event) {
  event.preventDefault()

  const allConditions = [
    isInvalidName(),
    isInvalidEmail(),
    isInvalidCpf(),
    isInvalidAddres(),
    isInvalidCity(),
    isInvalidState(),
    isInvalidResume(),
    isInvalidJobRole(),
    isInvalidDescription(),
    isInvalidDate(),
  ]

  errorList = [...new Set(errorList)]
  errorList.forEach(error => {
    createLi(error)
  })

  divAnswer.innerHTML = allConditions.includes(true)
                      ? tagUl.outerHTML
                      : '<p>Formulário enviado!</p>'

  errorList = []
  tagUl.innerHTML = ''
}

btnSubmit.addEventListener('click', submitForm)

// https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
// utilizado o "Set" para remover elementos repetidos de um array