// import logo from './products/image-yellow.png';
// import Img from './products/avatars/daniel.jpg';
// import logoRose from './products/image-rose.png';
// import logoAqua from './products/image-aqua.png';
// import logoSteel from './products/image-steel.png';
// import Avatar from './products/avatars/daniel.jpg'
// import Helen  from './products/avatars/helen.jpg'
// import Elliot  from './products/avatars/elliot.jpg'
// import Justen  from './products/avatars/justen.jpg'
import {Rating} from 'react-simple-star-rating'
import { useState } from 'react';
import products from './Seed';

function ProductFunc(props) {

    
    const [stars, setStars] = useState(props.stars)

    function handleDownVote (props) {
        // setVotes(votes - 1)
        // setStars(stars - 1)
      
    }
    function handleUpVote(props) {
        // setVotes(votes + 1)

        // if(stars > 5) {
        //     setStars(0)
        // } else{
        //     setStars(stars + 1)
        // }
        // console.log(stars);
        // let newProducts = []
        // const foundProduct = products.map(product => {
        //     if(product.id == props.id){
        //       product.votes = product.votes + 1;
        //     }
        //     return product
        // })

        // console.log(foundProduct);



        // console.log("upvoted");
        // console.log(props.id);
        // let count = props.votes + 1;
        // console.log(props.votes);
        // return count;
    }
    return (
        <div className="section d-flex">
            <img src={props.productImageUrl}></img>
            <div className="intro">
                <a onClick={() => props.onVote(props.id)}>
                    <i className="bi bi-caret-up-fill"></i>
                </a>
                <a  onClick={() => { handleDownVote(props) }}>
                    <i className="bi bi-caret-down-fill"></i>
                </a>
                <span>{props.votes}</span>
                <Rating
                    initialValue={stars}
                />
                <p className="name">{props.title}</p>
                <p>{props.description}</p>
                <span className="submit">Submitted by:</span>
                <img src={props.submitterAvatarUrl} alt="" />
            </div>
        </div>
    )
}



export default ProductFunc;