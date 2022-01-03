const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 01

numbers.forEach(num => console.log(num))

// exercicio 02

const soma = numbers.reduce((acc, val) => acc + val)
console.log(soma)

// exercicio 03

const mediaAritmetica = numbers.reduce((acc, val) => acc + val) / numbers.length
console.log(mediaAritmetica)

// exercicio 04

mediaAritmetica > 20 ? console.log("valor maior que 20") : console.log("valor menor ou igual a 20")

// exercicio 05

let maiorValor = numbers[0]
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i]
  }
}
console.log(maiorValor)

// exercicio 06

const odd = numbers.reduce((acc, val) => {
  if (val % 2 !== 0) acc++
  return acc
}, 0)
console.log(odd)

// exercicio 07

let menorValor = numbers[0]
for (let i = 1; i < numbers.length; i += 1) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i]
  }
}
console.log(menorValor)

// exercicio 08

const newArray = Array.from({length: 25}, (_, i) => i + 1)
console.log(newArray)

// exercicio 09

newArray.forEach(num => {
  console.log(num / 2)
})