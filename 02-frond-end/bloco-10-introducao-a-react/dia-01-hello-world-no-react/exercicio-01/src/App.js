import './App.css';
const tasks = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
      <ol>
        { tasks.map((task) => Task(task)) }
      </ol>
  );
}

export default App;
