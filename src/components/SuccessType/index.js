import React from 'react'

import SuccessTypeItem from '../SuccessTypeItem'

import './index.css'

function SuccessType(props) {
  return (
    <div className="success-type">
      <SuccessTypeItem
        title="Different location"
        content="Lorem ipsum dolor sit."
        styleName="location"
      />
      <SuccessTypeItem
        title="Fresh Products"
        content="Lorem ipsum dolor sit."
        styleName="fresh-products"
      />
      <SuccessTypeItem
        title="The best from the Beginning"
        content="Lorem ipsum dolor sit."
        styleName="beginning"
      />
    </div>
  )
}

export default SuccessType
