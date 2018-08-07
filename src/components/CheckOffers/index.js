import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

function CheckOffers() {
  return (
    <div className="other-offers">
      <Link to="/home" className="other-offers__link link ">
        Check Other Offers
      </Link>
    </div>
  )
}

export default CheckOffers
