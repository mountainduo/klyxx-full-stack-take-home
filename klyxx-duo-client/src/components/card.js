import React, {useContext} from 'react'
import {GlobalDispatchContext} from "../context/GlobalContextProvider";

const Card = ({id, title, price, imageUrl}) => {
  const dispatch = useContext(GlobalDispatchContext);

  return (<div className="card">
    <img className="card-img-top" src={imageUrl} alt={title}/>
    <div className="card-body">
      <p className="card-text">{title}: ${price}</p>
      <button type="button" className="btn btn-secondary btn-sm"
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  newItem: {_id: id, title: title, price: price, imageUrl: imageUrl, quantity: 1}
                });
              }}>
        Add to Cart
      </button>
    </div>
  </div>)
}

export default Card;
