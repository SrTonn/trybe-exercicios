const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (func) => {
  const employees = {
    data: func,
    // id1: func('Pedro Guerra'),
    // id2: func('Luiza Drumond'),
    // id3: func('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(employeeGenerator('Pedro Guerra')));

const shuffle = () => Math.ceil(Math.random() * 5);
const bet = (betNum, func) => {
  if (!betNum || !func) return 'Parametro incompleto.';
  return betNum === func() ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(bet(2, shuffle));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (correctAnswer, studentAnswer) => {
  let total = 0
  studentAnswer.forEach((answer, i) => {
    if (answer === correctAnswer[i]) {
      total += 1
    } else if (answer !== correctAnswer[i] && answer !== 'N.A' ) {
      total -= 0.5
    }
  });

  return total
}

const showFinalNote = (correctAnswer, studentAnswer, callback) => {
  const note = callback(correctAnswer, studentAnswer)
  return `Pontuação final: ${note}.`
}

console.log(showFinalNote(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers))

module.exports = {
  newEmployees, employeeGenerator, shuffle, bet,
};
