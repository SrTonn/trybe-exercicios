// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio-08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('gabumon', (err, pokemonInfo) => {
        expect(err).toStrictEqual(expectedError)
        done()
    })
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectString = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf'
    getPokemonDetails('Bulbasaur', (err, pokemonInfo) => {
        expect(pokemonInfo).toBe(expectString)
        done()
    })
  });
});


