const { sum } = require('./sum')
console.log(sum)

describe('descricao do que a funcao de teste faz', () => {
  it('descricao', () => {
    expect(sum(4, 5)).toBe(9)
  })

  it('teste com digitos 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('teste com string e number', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})