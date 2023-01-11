import React from "react";
// import logo from './products/image-yellow.png';
// import Img from './products/avatars/daniel.jpg'
class Product extends React.Component {
 
    render() {
        return (
            <div className="section">
                {/* <img src={logo}></img> */}
                <div class="intro">
                    <i className="bi bi-caret-up-fill"></i>
                    <span>{this.props.title}</span>
                    <p className="name">Haught or Naught</p>
                    <p>High-minded or absent-minded?You decide.</p>
                    <p className="submit">Submitted by:</p>
                    {/* <img src={Img} alt="" className="img" /> */}
                </div>
            </div>
        )
    }
}
export default Product;