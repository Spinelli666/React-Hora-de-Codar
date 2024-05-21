import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <SayMyName nome="Bernardo" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Bernardo" idade="22" profissao="Estagiário" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
