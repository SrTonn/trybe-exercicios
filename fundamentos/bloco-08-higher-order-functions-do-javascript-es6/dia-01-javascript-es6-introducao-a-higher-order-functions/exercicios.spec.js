const {
  employeeGenerator,
  newEmployees,
  shuffle,
  bet,
  checkAnswers,
  showFinalNote,
  RIGHT_ANSWERS,
  STUDENT_ANSWERS,
} = require('./exercicios');

describe('Implemente os casos de teste dos exercícios do dia 8.1', () => {
  it('Verifica se ao receber um uma string com nome retorna um objeto contendos os valores esperados', () => {
    expect(newEmployees(employeeGenerator('Pedro Guerra'))).toEqual({
      data: { fullName: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
    });
    
    expect(newEmployees(employeeGenerator('Luiza Drumond'))).toEqual({
      data: { fullName: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
    });
    
    expect(newEmployees(employeeGenerator('Carla Paiva'))).toEqual({
      data: { fullName: 'Carla Paiva', email: 'carla_paiva@trybe.com' },
    });
  });
  
  it('Verifica se ao receber 2 arrays retorna o valor 5', () => {
    expect(showFinalNote(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers)).toBe(5)
  });
});
