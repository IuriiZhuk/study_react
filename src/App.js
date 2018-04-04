import React, {Component,Fragment} from 'react';
import {  BrowserRouter as Router,  Route} from 'react-router-dom';



import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import About from './components/About';
import MenuMainContent from './components/MenuMainContent';
import Contacts from './components/Contacts';
import BookForm from './components/BookForm';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Personal from './components/Personal';




class App extends Component {
  
  

  render () {

    return (
      <Router>
        <Fragment>
            <Header />

            <Route exact path="/" component={MainContent} />
            <Route exact path="/about" component={About} />
            <Route exact path="/menu" component={MenuMainContent} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/book" component={BookForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path = "/personal" component={Personal}/>
            <Footer />
          </Fragment>
      </Router>
    );
  }
}

export default App;