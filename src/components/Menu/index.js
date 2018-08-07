import React from 'react'
import MenuItem from '../MenuItem'

import './index.css'

function Menu() {
  return (
    <section className="menu">
      <MenuItem
        title="main-dishes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
      <MenuItem
        title="soups"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
      <MenuItem
        title="hamburges"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
      <MenuItem
        title="desserts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
      <MenuItem
        title="barbecue"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
      <MenuItem
        title="salad"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, consequuntur!"
      />
    </section>
  )
}

export default Menu
