import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';



import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import About from './components/About';
import MenuMainContent from './components/MenuMainContent';
import Contacts from './components/Contacts';




class App extends Component {
  
  

  render () {

    return (
      <Router>
        <div>
            <Header />

            <Route exact path="/" component={MainContent} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={MenuMainContent} />
            <Route exact path="/contact" component={Contacts} />
            
            <Footer />
          </div>
      </Router>
    );
  }
}

export default App;