
import React from 'react';

import "./index.css";

function SuccessTypeItem (props) {
  return (
    <div className={`${props.styleName} success-type__item`}>
      <h3 className ={props.styleName+"__title"}>{props.title}</h3>
      <p className ={props.styleName+"__description"}>{props.content}</p>
    </div>

  );
}

export default SuccessTypeItem;