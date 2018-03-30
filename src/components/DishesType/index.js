import React from "react";

import DishesTypeItem from '../DishesTypeItem';

import "./index.css";

function DishesType () {
  return (
    <section className="main-page-dishes-type">
      <DishesTypeItem 
        title="Desserts"
        description="Lorem ipsum dolor sit."
        styleName= "desserts"
      />
      <DishesTypeItem 
        title="Smoothies"
        description="Lorem ipsum dolor sit."
        styleName="smoothies" 
      />
      <DishesTypeItem 
        title="Breakfast"
        description="Lorem ipsum dolor sit."
        styleName= "breakfast"
      />
      
    
    
    </section>
  );

}


export default DishesType;