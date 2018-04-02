import React, {Component} from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MenuMainContent from './components/MenuMainContent';

class App extends Component {
  
  

  render () {

    return (
      <div>
        <Header />
        <MainContent />
        {/* <MenuMainContent /> */}

      

        <Footer />
      </div>
    );
  }
}

export default App;