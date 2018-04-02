import React from 'react';

import LogoImg from '../../img/logo_lg.jpg'
import "./index.css";


function Logo (props) {
  return (
    <div className={`${props.styleName}__logo logo`}>
      <img className ="logo__img  " src={LogoImg} alt ="logo"/>
      <p>Gratia</p>
    </div>
  );
}

export default Logo;