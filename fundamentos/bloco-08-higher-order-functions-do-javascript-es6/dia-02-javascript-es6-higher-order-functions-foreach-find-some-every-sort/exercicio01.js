const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947(array) {
  const { author } = array.find(({author}) => author.birthYear === 1947)
  
  return author.name
}
console.log(authorBornIn1947(books)) // Stephen King

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

// Exercício 03
const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: { name: 'George R. R. Martin', birthYear: 1948 },
  releaseYear: 1991,
};

function getNamedBook(array) {
  // escreva seu código aqui
  return array.find(({name}) => name.length === 26)
}

console.log(getNamedBook(books))

/*
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];
*/

function booksOrderedByReleaseYearDesc(array) {
  return array.sort((a, b) => b.releaseYear - a.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc(books))

// Exercício 05
// const expectedResult = false;

function everyoneWasBornOnSecXX(array) {
  return array.every(({author}) => author.birthYear > 2001)
}
console.log(everyoneWasBornOnSecXX(books)) // false

// Exercício 06
// const expectedResult = true;

function someBookWasReleaseOnThe80s(array) {
  return array.some(({releaseYear}) => releaseYear >= 1980 && releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s(books)) // true