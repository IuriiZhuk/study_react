import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function SuccessTypeItem(props) {
  return (
    <div className={`${props.styleName} success-type__item`}>
      <h3 className={props.styleName + '__title'}>{props.title}</h3>
      <p className={props.styleName + '__description'}>{props.content}</p>
    </div>
  )
}

SuccessTypeItem.proptypes = {
  styleName: PropTypes.string,
  title: PropTypes.stgring,
  content: PropTypes.string,
}

export default SuccessTypeItem
