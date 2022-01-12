const uppercase = require('./exercicio-07.js');

describe('Implemente os casos de teste dos exercícios do dia 9.1', () => {
  it('Verifica se a chamada de uma funcao callback transforma as letras para maiusculas.', (done) => {
    const expectedString = 'ALOHA';
    uppercase('aloha', (str) => {
      try {
        expect(str).toBe(expectedString)
        done()
      } catch (error) {
        done(error)
      }
    })
  });
});
