import React from "react";

import "./index.css";

function Link (props) {
  
  return (
   
    <a className = "navigation__link" >
      {props.title}
    </a>
  );
}

export default Link ;