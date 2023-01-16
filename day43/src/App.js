import { Routes, Route, Link } from 'react-router-dom'
import Test from './components/Test';
import About from './components/About';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import FeedbackForm from './components/FeedbackForm';
import HomeFunc from './components/Home';
import Usukhuu from './components/about/Usukhuu';
import Khangai from './components/about/Khangai';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <h1>Day-43-Router</h1>
      <div id='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/about/test'}>Test</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/feedback'}>FeedbackForm</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomeFunc />} />
        <Route exact path="/about/*" element={<About />} >
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />
          <Route path="test" element={<Test />} />

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<NotFound />} />



      </Routes>
    </div>
  )
}

export default App;
