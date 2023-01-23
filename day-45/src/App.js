import {Routes, Route} from 'react-router-dom'
import './App.css';

import Accordion from './components/Accordion';
// import Index from './components/Index';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';



function App() {
 

  
  return (
    <div className="App">

    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/accordion' element={<Accordion/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
