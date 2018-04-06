import React from 'react';
import PropTypes from 'prop-types'

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


DishesTypeItem.propTypes = {
  styleName : PropTypes.string,
  description : PropTypes.string,
  title : PropTypes.string

};



export default DishesTypeItem;