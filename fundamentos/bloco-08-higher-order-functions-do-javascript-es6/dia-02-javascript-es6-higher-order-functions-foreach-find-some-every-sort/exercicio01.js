const books = require('./data')

function authorBornIn1947(array) {
  const { author } = array.find(({author}) => author.birthYear === 1947)
  
  return author.name
}
console.log(authorBornIn1947(books)) // Stephen King