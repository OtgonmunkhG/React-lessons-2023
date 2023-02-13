
import './App.css';
import {Button} from 'react-bootstrap'
import MainMenu from './components/MainMenu';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <MainMenu/>
      </div>
      <header className="App-header">
       <h1>React bootstrap components</h1>
      
      </header>
      <Button variant="secondary">Secondary</Button>
     
    </div>
  );
}

export default App;
