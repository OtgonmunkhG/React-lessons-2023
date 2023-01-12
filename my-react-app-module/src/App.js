import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import up from './products/up.png';
// import logoImage from './products/image.png';
// import Product from './Product';
// import ProductTwo from './ProductTwo';
// import ProductThree from './ProductThree';
// import ProductFour from './ProductFour';
import ProductFunc from './ProductFunc';
import products from './Seed';
import './App.css';
import { useState } from 'react';


function App() {
  // const productList = products.map((product) => {
  //   // console.log(product);
  //   return <ProductFunc
  //     title={product.title}
  //     id={product.id}
  //     description={product.description}
  //     url={product.url}
  //     votes={product.votes}
  //     submitterAvatarUrl={product.submitterAvatarUrl}
  //     productImageUrl={product.productImageUrl}
  //     stars={product.stars}
  //   />
  // })

  const [productList4, setProductList] = useState(products)
  function hanleProductDownVote(productId) {
    const lastProducts = productList4.map(product => {
      if(product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes - 1
        })
      } else {
        return product;
      }
    })
    console.log(lastProducts);
    setProductList(lastProducts)
  }

  function handleProductUpVote(productId) {

    // console.log('upVote', productId);
    // const foundProduct = products.filter(product => {
    //   if(product.id == productId){
    //     return product
    //   }
    // }) 

    // foundProduct[0].votes = foundProduct[0].votes + 1
    // console.log(foundProduct[0].votes);
    console.log(products);

    // /change votes inproducts array
    const newProducts = productList4.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })

      } else {
        return product;
      }
    })
    console.log(newProducts);
    setProductList(newProducts)

    
  }
  const productList2 = productList4.map((product) => {
    return <ProductFunc
      title={product.title}
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onVote={handleProductUpVote}
      offVote={hanleProductDownVote}
      stars={product.stars}
    />
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products<hr />
        </h1>
      </header>
      <div className="container">
        {/* {productList} */}
        {productList2}
      </div>


    </div>


  );
}

export default App;
