import React from 'react';

function MainContentHead (props) {
  return (
   <div className="main-content__head">
    <h2 className="main-content__title">{props.title}</h2>
    <p className="main-content__head-description">{props.description}</p>
   </div>

  );

}

export default MainContentHead;