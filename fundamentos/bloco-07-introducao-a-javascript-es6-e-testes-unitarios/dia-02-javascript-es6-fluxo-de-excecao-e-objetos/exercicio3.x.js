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