import logo from './products/image-yellow.png';
import logoAqua from './products/image-aqua.png';
// import logoRose from './products/image-rose.png';
// import logoImage from './products/image.png';
import logoSteel from './products/image-steel.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products<hr/>
        </h1>
      </header>
      <div class="container">
      <div class="section1">
        <img src={logo}></img>
      </div>
      <div class="section2">
        <img src={logoAqua}></img>
      </div>
      <div class="section3">
        <img src={logoSteel}></img>
      </div>
      </div>

    </div>
  );
}

export default App;
