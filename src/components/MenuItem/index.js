import React from 'react';
import PropTypes from 'prop-types';

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


MenuItem.propTypes = {
  title: PropTypes.string,
  description : PropTypes.string
};

export default MenuItem;