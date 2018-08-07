import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function MainContentHead(props) {
  return (
    <div className="main-content__head">
      <h2 className="main-content__title">{props.title}</h2>
      <p className="main-content__head-description">{props.description}</p>
    </div>
  )
}

MainContentHead.proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default MainContentHead
