import React from 'react'
import MainContentHead from '../MainContentHead';
import Menu from '../Menu';

function MenuMainContent () {
  return (
    <main className="maincontent">
      <div className="main-content__inner">
        <MainContentHead />
        <Menu />
      </div>
    </main>

  );

}

export default MenuMainContent;