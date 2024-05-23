import './App.css';
import OutraList from './components/OutraList';

function App() {

  const meusItens = ['React', 'Angular', 'Vue'];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraList itens={meusItens}/>
      <OutraList itens={[]}/>
      
    </div>
  );
}

export default App;
