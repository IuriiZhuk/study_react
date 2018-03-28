import React from "react";

import DishesTypeItem from '../DishesTypeItem';

function DishesType () {
  return (
    <section className="main-page-dishes-type">
      <DishesTypeItem 
        title="Desserts"
        description="Lorem ipsum dolor sit."
      />
      <DishesTypeItem 
        title="Smoothies"
        description="Lorem ipsum dolor sit."
      />
      <DishesTypeItem 
        title="Breakfast"
        description="Lorem ipsum dolor sit."
      />
      
    
    
    </section>
  );

}


export default DishesType;