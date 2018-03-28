import React from 'react';


import Logo from "../Logo";
import Navigation from "../Navigation";



function Header () {
  return (
    <header className = "main-header">
      <div className = "main-header__inner" >
        <Logo />
        <Navigation />
      </div>

    </header>
  );
}


export default Header;