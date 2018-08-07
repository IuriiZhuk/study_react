import React from 'react'
import Logo from '../Logo'
import './index.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer__inner">
        <Logo className="main-footer" />
        <div className=" main-footer__social social" />
      </div>
    </div>
  )
}

export default Footer
