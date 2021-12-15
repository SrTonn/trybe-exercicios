// Parte I
const recursive = num => num <= 1 ? 1 : num * recursive(num - 1)
console.log(recursive(4), 24)

// Parte II
const longestWord = (str) => str.split(' ').reduce((acc, val) => acc.length > val.length ? acc : val)
const res = longestWord("Antonio foi no banheiro e nao sabemos o que aconteceu") // retorna 'aconteceu'

console.log(res) // retorna 'aconteceu'

// Parte III
// Feito em um arquivo a parte, pasta exercicio2.3

// Parte IV
const replaceX = (str, x) => {
  return str.replace('x', x)
}
// console.log(replaceX("Tryber x aqui!", 'Tonn'))

const skills = ['javascript', 'typescript', 'jest', 'HTML', 'CSS']

const func = (callback) => {
  return `${callback} Minhas cinco principais habilidades são:\n${skills.sort().join(',\n')}`
}
console.log(func(replaceX("Tryber x aqui!", 'Tonn')))