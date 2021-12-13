const books = require('./data')

function smallerName(array) {
  let nameBook;

  // escreva aqui o seu código
  array.forEach(({name}, i) => {
    if (i === 0 || nameBook.length > name.length) {
      nameBook = name
    }
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

console.log(smallerName(books)) // Duna