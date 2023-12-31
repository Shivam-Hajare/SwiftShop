import React from 'react'
import "./ProductCard.css"
import Rating from '../Rating/Rating'
const RestaurantCard = (props) => {
  return (
    <div className='card' >
        <img src={props.data.thumbnail} alt=""/>
         <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
        <span><Rating rating={props.data.rating}/></span>
        <p><b>${props.data.price}</b></p>
    </div>
  )
}

export default RestaurantCard;  