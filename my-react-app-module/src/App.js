import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import up from './products/up.png';
// import logoImage from './products/image.png';
// import Product from './Product';
// import ProductTwo from './ProductTwo';
// import ProductThree from './ProductThree';
// import ProductFour from './ProductFour';
import {ProductFunc, Product2, Product3, Product4} from './ProductFunc';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products<hr />
        </h1>
      </header>
      <div className="container">
        <ProductFunc />
        <Product2/>
        <Product3/>
         <Product4/>
        

      </div>

    </div>


  );
}

export default App;
