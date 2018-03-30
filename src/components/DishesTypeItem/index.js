import React from 'react';

import "./index.css";

function DishesTypeItem (props) {
  
  
  return (
    <div className={` ${props.styleName} dishes-type-item`}>
      <h3 className={` ${props.styleName}__title`}>{props.title}</h3>
      <div className={` ${props.styleName}__separate`}></div>
      <p className={` ${props.styleName}__description`}>{props.description}</p>
    </div>

  );

}


export default DishesTypeItem;