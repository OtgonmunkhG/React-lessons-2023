import React from "react";
import logoRose from './products/image-rose.png';
class ProductFour extends React.Component {
    render() {
        return (

                <div className="section">
                    <img src={logoRose}></img>
                    <div className="intro">
                        <i className="bi bi-caret-up-fill"></i>
                        <span>23</span>
                        <p className="name">Supermajority:The Fantasy Congress League</p>
                        <p>Earn point when your favorite politicians pass legislation.</p>
                        <p className="submit">Submitted by:</p>
                    </div>
                </div>
        
        )
    }
}
export default ProductFour;