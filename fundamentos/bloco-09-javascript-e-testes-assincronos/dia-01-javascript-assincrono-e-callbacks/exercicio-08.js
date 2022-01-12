const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(pokemon, callback) {
  const filter = ({ name }) => name === pokemon;
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const { name, type, ability } = pokemons.find(filter);

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Bulbasaur', (err, pokemonInfo) => {
  try {
    if (err) throw new Error(err);
    console.log(pokemonInfo);
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  getPokemonDetails,
};
