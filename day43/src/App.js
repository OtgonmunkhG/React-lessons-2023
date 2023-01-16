import { Routes, Route } from 'react-router-dom'

import About from './components/About';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div>
      <h1>Day-43-Router</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
