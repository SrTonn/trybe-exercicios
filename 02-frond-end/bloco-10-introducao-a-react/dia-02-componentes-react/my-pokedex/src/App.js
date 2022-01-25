import './App.css';
import Pokemon from './Pokemon.jsx'
import data from './data'

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      <div className='container'>
        {data.map(({name, type, averageWeight: { value, measurementUnit }, image }) =>
          <Pokemon
            name={name}
            type={type}
            weight={`${value} ${measurementUnit}`}
            image={image}
          />
        )}
      </div>
    </>
  );
}

export default App;
