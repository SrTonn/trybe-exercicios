const { sum, myRemove, myFizzBuzz } = require('./sum')
console.log(sum)

describe('teste da funcao sum()', () => {
  it('checa a soma de 4 e 5', () => {
    expect(sum(4, 5)).toBe(9)
  })

  it('checa a soma de 0 e 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('testa com string e number', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})

describe('teste da funcao myRemove()', () => {
  it('checa se o array removeu o item selecionado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  
  it('checa se o array retornou algo diferente da entrada inicial', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  
  it('checa se o array original foi retornado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe('teste da funcao myFizzBuzz()', () => {
  it('checa se é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })

  it('checa se é divisivel por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })

  it('checa se é divisivel por 5', () => {
    expect(myFizzBuzz(50)).toBe('buzz')
  })

  it('checa se ao enviar um valor diferente do tipo \'number\' a funcao retorna um \'false\'', () => {
    expect(myFizzBuzz('aloha')).toBe(false)
  })
})