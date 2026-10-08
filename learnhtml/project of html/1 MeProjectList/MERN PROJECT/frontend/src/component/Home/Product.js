import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'



const Product = ({Product})=> {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 19 : 20,
    value: Product.ratings,
    isHalf: true
};

  return (
    <Link className='productCard' to={`/product/${Product._id}`}>
        <img src={Product.images[0].url} alt={Product.name} />

        <p>{Product.name}</p>
        <div>
            <ReactStars {...options} /> {" "}
            <span>({Product.numOfReviews} Reviews)</span>
        </div>
        <span>{`$${Product.price}`}</span>
    </Link>
  )
}

export default Product;
