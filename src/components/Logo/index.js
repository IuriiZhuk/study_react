import React from 'react';


import "./index.css";

function Logo (props) {
  return (
    <div className={`${props.styleName}__logo logo"`}>
      <img className ="logo__img  "/>
      <p>Gratia</p>
    </div>
  );
}

export default Logo;