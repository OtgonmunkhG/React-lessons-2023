import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import up from './products/up.png';
// import logoImage from './products/image.png';
import Product from './Product';
// import ProductTwo from './ProductTwo';
// import ProductThree from './ProductThree';
// import ProductFour from './ProductFour';
import ProductFunc from './ProductFunc';
import products from './Seed';
import './App.css';


function App() {
  const productList = products.map((product) => {
    console.log(product);
    return <ProductFunc
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      stars={product.stars}
    />
  })
  const productList2 = products.map((product) => {
    return <ProductFunc
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      />
   })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products<hr />
        </h1>
      </header>
      <div className="container">
        {productList}
        {productList2}




      </div>
      

    </div>


  );
}

export default App;
