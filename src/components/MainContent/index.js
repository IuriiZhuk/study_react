import React from 'react'

import MainContentHead from '../MainContentHead'
import DishesType from '../DishesType'
import Details from '../Details'
import SuccessType from '../SuccessType'

import './index.css'

function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content__inner">
        <MainContentHead
          title="Perfection"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam. "
        />
        <DishesType />
        <Details />
        <MainContentHead
          title="How We Reach This"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, magnam."
        />
        <SuccessType />
      </div>
    </main>
  )
}

export default MainContent
