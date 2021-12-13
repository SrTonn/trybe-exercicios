const books = require('./data')

// Exercício 05
// const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
  return array.every(({author}) => author.birthYear > 2001)
}
console.log(everyoneWasBornOnSecXX(books)) // false