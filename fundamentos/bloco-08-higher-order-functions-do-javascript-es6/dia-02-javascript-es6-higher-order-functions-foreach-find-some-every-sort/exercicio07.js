const books = require('./data')
// const expectedResult = false;

function authorUnique(array) {
  const birthYearList = []
  array.forEach(({author}) => {
    birthYearList.push(author.birthYear)
  })

  return birthYearList.length === new Set(birthYearList).size
}
console.log(authorUnique(books)) // false