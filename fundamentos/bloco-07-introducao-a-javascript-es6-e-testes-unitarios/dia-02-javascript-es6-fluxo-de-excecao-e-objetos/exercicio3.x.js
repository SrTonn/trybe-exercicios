const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addNightShift(obj, key, value) {
  obj[key] = value
}
addNightShift(lesson2, 'turno', 'noite')

function listObjectKeys(obj) {
  console.log(Object.keys(obj))
}
listObjectKeys(lesson1)

function objectLenght(obj) {
  console.log(Object.keys(lesson1).length)
}
objectLenght(lesson3)

function listObjectValues(obj) {
  console.log(Object.values(obj))
}
listObjectValues(lesson2)

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3})

function numberOfStudents(obj) {
  return Object.values(obj).reduce((acc, {numeroEstudantes}) => acc + numeroEstudantes, 0)
}
console.log(numberOfStudents(allLessons))

function getValueByNumber(obj, index) {
  return Object.values(obj)[index]
}
console.log(getValueByNumber(lesson1, 0))

function verifyPair(obj, key, value) {
  return Object.entries(obj).some(v => v[0] === key && v[1] === value)
}
console.log(verifyPair(lesson3, 'turno', 'noite')); // true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // false

// Bônus
// Part I
function createReport(obj, professor) {
  return Object.values(obj).reduce((acc, obj) => obj.professor === professor ? acc + obj.numeroEstudantes : acc, 0)
}
console.log(createReport(allLessons, 'Maria Clara')) // 30

// Part I