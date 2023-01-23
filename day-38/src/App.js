import Button from './components/ButtonFunc';
import ToolBar from './components/ToolBar';
import ToolBarNext from './components/ToolBarNext';
import './App.css';
import ParentToolBar from './components/ParenthToolBar';
import Signup from './components/SingUp';

function App() {
  return (
    <div className="App">
      <h1>Day-38 React Events</h1>
      <div className="container">
        <Button/>
      </div>
      <ToolBar />
       <ToolBarNext/>
       <ParentToolBar/>
       <Signup/>
    </div>
  );
}

export default App;
