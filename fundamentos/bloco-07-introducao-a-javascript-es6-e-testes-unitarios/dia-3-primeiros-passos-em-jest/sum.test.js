const { sum, myRemove } = require('./sum')
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

  it('checa se o array removeu o item selecionado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  it('checa se o array retornou algo diferente da entrada inicial', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  it('checa se o array retornou algo diferente da entrada inicial', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })

})