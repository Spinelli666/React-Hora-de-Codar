import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Maria";

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Bernardo" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Bernardo" idade="22" profissao="Estagiário" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;
