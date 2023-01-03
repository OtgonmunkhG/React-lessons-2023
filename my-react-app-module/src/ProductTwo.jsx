import React from "react";
import logoAqua from './products/image-aqua.png';
class ProductTwo extends React.Component {
    render() {
        return (
                <div className="section">
                    <img src={logoAqua}></img>
                    <div className="intro">
                        <i className="bi bi-caret-up-fill"></i>
                        <span>44</span>
                        <p className="name">Yellow Pail</p>
                        <p>On demand sand castle construction expertise.</p>
                        <p className="submit">Submitted by:</p>
                    </div>
                </div>
            
        )
    }
}
export default ProductTwo;