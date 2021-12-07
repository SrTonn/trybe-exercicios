const {
  sum,
  myRemove,
  myFizzBuzz,
  encode, 
  decode,
  techList,
  hydrate,
} = require('./functions')

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

describe('teste da funcao encode()', () => {
  it('verifica se o encode é uma funcao', () => {
    expect(encode).toEqual(expect.any(Function))
  })

  it('verifica se o decode é uma funcao', () => {
    expect(decode).toEqual(expect.any(Function))
  })

  it('verifica se a funcao encode está substituindo as letras por numeros',() => {
    expect(encode('aeiou')).toBe('12345')
  })

  it('verifica se a funcao decode está substituindo os numeros pelas letras',() => {
    expect(decode('12345')).toBe('aeiou')
  })

  it('verifica se as consoantes não estão sendo alteradas.',() => {
    expect(decode('b c d f g h j k l m n p q r s t v w x z'))
      .toBe('b c d f g h j k l m n p q r s t v w x z')
  })

  it('verifica se a funcao decode retorna o mesmo numero de caracteres ao qual foi passado como parametro',() => {
    expect(decode('aloha').length).toBe(5)
  })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
