import logo from './logo.svg';
import './App.css';
import Learn from './components/Hello';
import Learning from './components/Learning'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       
        <Learn name='Mango' weight='20gm'/>
        <Learn name='Apple' weight='30gm'/>
        <Learn name='Orange' weight='10gm'/>
        <Learn name='Coding' weight='150gm'/>
      </header>
    </div>
  );
}

export default App;
