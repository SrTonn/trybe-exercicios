// Exercicio 01

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

const val = 10
let acc = val;
for (let i = val - 1; i > 0; i -= 1) {
  acc *= i
}
console.log(acc)

// Exercicio 02

const word = 'tryber'
const reverseWord = word.split('').reverse().join('')
console.log(word)
console.log(reverseWord)

// Exercicio 03

let array = ['java', 'javascript', 'python', 'html', 'css']
const biggestWord = array.sort((a, b) => b.length - a.length)[0]
console.log(biggestWord)

const smallestWord = array.sort((a, b) => a.length - b.length)[0]
console.log(smallestWord)

// Exercicio 04