const books = require('./data')

// Exercício 06
// const expectedResult = true;
function someBookWasReleaseOnThe80s(array) {
  return array.some(({releaseYear}) => releaseYear >= 1980 && releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s(books)) // true