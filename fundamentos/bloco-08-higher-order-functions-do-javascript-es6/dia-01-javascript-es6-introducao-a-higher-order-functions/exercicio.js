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
console.log(newEmployees(employeeGenerator('Luiza Drumond')));
console.log(newEmployees(employeeGenerator('Carla Paiva')));

module.exports = { newEmployees, employeeGenerator };
