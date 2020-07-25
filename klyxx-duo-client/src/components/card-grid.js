import React from 'react'
import Card from "./card";

const CardGrid = ({inventory}) =>
  <div className="row">{
    inventory.map(function (item, index) {
      return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <Card
            course={item}
            key={item._id}
            index={index}
          />
        </div>
      )
    })
  }
  </div>

export default CardGrid;