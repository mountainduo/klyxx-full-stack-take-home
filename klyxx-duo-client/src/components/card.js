import React from 'react'

const Card = ({title, price, imageUrl}) =>
  <div className="card">
    <img className="card-img-top" src={imageUrl} alt={title}/>
    <div className="card-body">
      <p className="card-text">{title}: ${price}</p>
    </div>
  </div>

export default Card;
