import React from "react";
import logoSteel from './products/image-steel.png';
class ProductThree extends React.Component {
    render() {
        return (
            <div className="section">
                <img src={logoSteel}></img>
                <div className="intro">
                    <i className="bi bi-caret-up-fill"></i>
                    <span>42</span>
                    <p className="name">Tinfoild: Tailored tinfoil hats</p>
                    <p>We already have your measurements and shipping address.</p>
                    <p className="submit">Submitted by:</p>
                </div>
            </div>
        )
    }
}
export default ProductThree;