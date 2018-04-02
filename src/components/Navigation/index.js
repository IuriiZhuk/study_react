import React, {Component} from 'react';
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';

import "./index.css";
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

import Logo from '../Logo';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      isOpenLogin: false,
      isOpenSignup: false,
     };
  }

  toggleModalLogin = () => {
    this.setState({
    isOpenLogin: !this.state.isOpenLogin
    });
  }

  toggleModalSignup = () => {
      this.setState({
      isOpenSignup: !this.state.isOpenSignup
    });
  }


    render () {
 
      return (
        
          <nav className = "navigation">

          <a className="navigation__link"> About</a> 
          <a className="navigation__link"> Menu</a>
          <a className="navigation__link"> Contact </a>
          <a className="navigation__link" onClick={this.toggleModalLogin}>Login </a>
          <a className="navigation__link" onClick={this.toggleModalSignup} > Sign Up</a>

          <LoginForm show={this.state.isOpenLogin} onClose={this.toggleModalLogin}/>
          <SignupForm show={this.state.isOpenSignup} onClose={this.toggleModalSignup}/>

          </nav>

        

        
  );
}
}


export default Navigation ;