import logo from './products/image-yellow.png';
// import Img from './products/avatars/daniel.jpg';
import logoRose from './products/image-rose.png';
import logoAqua from './products/image-aqua.png';
import logoSteel from './products/image-steel.png';
import Avatar from './products/avatars/daniel.jpg'
import Helen  from './products/avatars/helen.jpg'
import Elliot  from './products/avatars/elliot.jpg'
import Justen  from './products/avatars/justen.jpg'
function ProductFunc() {
    return (
        <div className="section">
            <img src={logo}></img>
            <div class="intro">
                <i className="bi bi-caret-up-fill"></i>
                <span>55</span>
                <p className="name">Haught or Naught</p>
                <p>High-minded or absent-minded?You decide.</p>
                <span className="submit">Submitted by:</span>
                <img src={Avatar} alt="" />
            </div>
        </div>
    )
}


function Product2() {
    return (
        <div className="section">
            <img src={logoAqua}></img>
            <div className="intro">
                <i className="bi bi-caret-up-fill"></i>
                <span>44</span>
                <p className="name">Yellow Pail</p>
                <p>On demand sand castle construction expertise.</p>
                <span className="submit">Submitted by:</span>
                <img src={Helen} alt="" />
            </div>
        </div>
    )
}
function Product3() {
    return (
        <div className="section">
            <img src={logoSteel}></img>
            <div className="intro">
                <i className="bi bi-caret-up-fill"></i>
                <span>42</span>
                <p className="name">Tinfoild: Tailored tinfoil hats</p>
                <p>We already have your measurements and shipping address.</p>
                <span className="submit">Submitted by:</span>
                <img src={Elliot} alt="" />
            </div>
        </div>
    )
}
function Product4() {
    return (
        <div className="section">
            <img src={logoRose}></img>
            <div className="intro">
                <i className="bi bi-caret-up-fill"></i>
                <span>23</span>
                <p className="name">Supermajority:The Fantasy Congress League</p>
                <p>Earn point when your favorite politicians pass legislation.</p>
                <span className="submit">Submitted by:</span>
                <img src={Justen} alt="" />
            </div>
        </div>
    )
}

export {ProductFunc, Product2, Product3, Product4};