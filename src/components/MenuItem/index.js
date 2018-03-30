import React from 'react';

import "./index.css";

function MenuItem (props) {
  return (
    <article className="menu__item">
      <div className={`menu__${props.title} menu__item-img`}></div>
      <h4 className="menu__item-title">{props.title}</h4>
      <p className="menu__item-description">{props.description}</p>
    </article>
  );
}

export default MenuItem;