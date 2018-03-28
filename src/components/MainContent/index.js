import React from 'react';

import MainContentHead from '../MainContentHead';
import DishesType from '../DishesType';
import CheckOffers from '../CheckOffers';
import Details from '../Details';

function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content__inner">
        <MainContentHead 
          title = "Perfection" 
          description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam. "
         />
         <DishesType />
         <CheckOffers />
         <Details />
         <MainContentHead 
          title = "How We Reach This" 
          description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam."
         />
          <DishesType />



      </div>
    </main>
  );
}



export default MainContent;