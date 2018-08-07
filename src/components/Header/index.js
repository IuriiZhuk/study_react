import React from 'react'

import Logo from '../Logo'
import Navigation from '../Navigation'
import './style.css'

function Header() {
  return (
    <header className="main-header">
      <div className="main-header__inner">
        <Logo styleName="main-header" />
        <Navigation />
      </div>
    </header>
  )
}

export default Header
