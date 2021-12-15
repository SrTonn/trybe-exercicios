// Parte I
const recursive = num => num <= 1 ? 1 : num * recursive(num - 1)
console.log(recursive(4), 24)

// Parte II
const longestWord = (str) => str.split(' ').reduce((acc, val) => acc.length > val.length ? acc : val)
const res = longestWord("Antonio foi no banheiro e nao sabemos o que aconteceu") // retorna 'aconteceu'

console.log(res) // retorna 'aconteceu'

// Parte III
// Feito em um arquivo a parte, pasta exercicio2.3