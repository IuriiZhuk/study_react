import React from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MenuMainContent from './components/MenuMainContent';

function App () {
  return (
    <div>
      <Header />
      {/* <MainContent /> */}
      <MenuMainContent />

      <Footer />
    </div>
  );
}


export default App;