import React from 'react';

function DishesTypeItem (props) {
  
  return (
    <div className="dishes-type-item">
      <h3 className="deserts__title">{props.title}</h3>
      <div className="deserts__separate"></div>
      <p className="desert__description">{props.description}</p>
    </div>

  );

}


export default DishesTypeItem;