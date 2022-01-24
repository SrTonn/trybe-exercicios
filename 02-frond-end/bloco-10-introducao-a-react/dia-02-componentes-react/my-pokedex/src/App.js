import './App.css';
import Pokemon from './Pokemon.jsx'
import data from './data'

function App() {
  return (
    <>
    <h1>Pokedex</h1>
    <div className='container'>
      {data.map((pokemon) =>
        <Pokemon
          name={pokemon.name}
          type={pokemon.type}
          weight={pokemon.averageWeight.value + ' kg'}
          image={pokemon.image}
        />
      )}
    </div>
    </>
  );
}

export default App;
