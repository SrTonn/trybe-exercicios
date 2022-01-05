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

// Adicione o código do exercício aqui:

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, {author}) => `${acc ? acc + ', ' : ''}${author.name}`, '') + '.'
}
console.log(reduceNames())

// Versões alternativas
function reduceNames2() {
  return books.reduce((acc, {author}) => acc === '' ? author.name : acc + ', ' + author.name, '') + '.'
}
console.log(reduceNames2())

function reduceNames3() {
  return books.reduce((acc, {author}) => acc.concat(author.name, ', '), '').replace(/,\s*$/, '.')
}
console.log(reduceNames3())

function reduceNames4() {
  return books.reduce((acc, {author}) => acc.concat(author.name), []).join(', ') + '.'
}
console.log(reduceNames4())

function reduceNames5() {
  return books.reduce((acc, {author}) => acc.push(author.name) && acc, []).join(', ') + '.'
}
console.log(reduceNames5())

function reduceNames6() {
  return books.reduce((acc, {author}) => {
    acc.push(author.name)
    return acc
  }, []).join(', ') + '.'
}
console.log(reduceNames6())
