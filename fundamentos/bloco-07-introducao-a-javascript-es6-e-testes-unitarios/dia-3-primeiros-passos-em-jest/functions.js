// const dados = require('./dados')

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(str) {
  const table = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  return str.replace(/(a|e|i|o|u)/g, (letter) => (table[letter]));
}
console.log(encode('aeiou'))

function decode(str) {
  const table = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  return str.replace(/[1-5]/g, (number) => (table[number]));
}

function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';
  let result = [];
  techs.sort().forEach((tech) => {
    result.push({
      tech,
      name,
    });
  });

  return result;
}

function hydrate(str) {
  const singularMessage = 'copo de água';
  const pluralMessage = 'copos de água';

  const regex = /\d+/g;
  const number = str.match(regex).reduce((acc, curr) => acc + Number(curr), 0);

  return number > 1 ? `${number} ${pluralMessage}` : `${number} ${singularMessage}`;
}

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

function checkEmptyObj(obj) {
  return JSON.stringify(obj) === "{}"
}
// Bônus
const searchEmployee = (id, details) => {
  const result = {}
  professionalBoard.forEach((obj) => {
    if (obj.id === id) {
      result.firstName = obj.firstName
      result.lastName = obj.lastName
      result.specialities = obj.specialities
    }
  })

  if (result[details]) {
    return result[details]
  }

  return checkEmptyObj(result) ? 'ID não identificada' : result
};
console.log(searchEmployee('8579-6'))

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
}