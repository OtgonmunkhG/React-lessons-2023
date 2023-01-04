// import logo from './products/image-yellow.png';
// import Img from './products/avatars/daniel.jpg';
// import logoRose from './products/image-rose.png';
// import logoAqua from './products/image-aqua.png';
// import logoSteel from './products/image-steel.png';
// import Avatar from './products/avatars/daniel.jpg'
// import Helen  from './products/avatars/helen.jpg'
// import Elliot  from './products/avatars/elliot.jpg'
// import Justen  from './products/avatars/justen.jpg'
// import products from './Seed';
function ProductFunc(props) {
    return (
        <div className="section">
            <img src={props.productImageUrl}></img>
            <div class="intro">
                <i className="bi bi-caret-up-fill"></i>
                <span>{props.votes}</span>
                <p className="name">{props.title}</p>
                <p>{props.description}</p>
                <span className="submit">Submitted by:</span>
                <img src={props.submitterAvatarUrl} alt="" />
            </div>
        </div>
    )
}



export default ProductFunc;