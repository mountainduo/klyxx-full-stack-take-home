import React from 'react'
import Card from "./card";

const CardGrid = ({inventory, addToCart}) =>
  <div className="row">{
    inventory.map(function (item, index) {
      return (
        <div className="col-xs-12 col-sm-6 col-md-4 mb-3">
          <Card
            id={item._id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            key={item._id}
            index={index}
          />
        </div>
      )
    })
  }
  </div>

export default CardGrid;
