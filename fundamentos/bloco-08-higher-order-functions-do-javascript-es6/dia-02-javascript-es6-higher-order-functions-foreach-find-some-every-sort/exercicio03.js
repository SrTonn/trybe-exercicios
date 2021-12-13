const books = require('./data')

// Exercício 03
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: { name: 'George R. R. Martin', birthYear: 1948 },
  releaseYear: 1991,
};

function getNamedBook(array) {
  return array.find(({name}) => name.length === 26)
}

console.log(getNamedBook(books))