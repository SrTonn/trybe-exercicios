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

const shuffle = () => Math.ceil(Math.random() * 5);
const bet = (betNum, func) => (betNum === func ? 'Parabéns você ganhou' : 'Tente novamente');

module.exports = {
  newEmployees, employeeGenerator, shuffle, bet,
};
