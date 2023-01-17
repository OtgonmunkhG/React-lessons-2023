
import './App.css';
import Accordion from './compenonts/Accordion';
import Index from './compenonts/Index';
import {Routes, Route} from 'react-router-dom'
import HomePage from './compenonts/Home';
import AboutPage from './compenonts/About';
import Movies from './compenonts/Movies';
import Movie from './compenonts/Movie'

function App() {
  return (
    <div className="App">
   
     <Routes>
      <Route path={"/accordion"} element={<Accordion/>}/>
      <Route path={"/"} element={<Index/>}/>
      <Route path={"/home"} element={<HomePage/>}/>
      <Route path={"/about"} element={<AboutPage/>}/>
      <Route path={"/movies"} element={<Movies/>}/>
      <Route path={"/movie/:id"} element={<Movie/>}/>
     </Routes>
    </div>
  );
}

export default App;
