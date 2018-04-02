import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import "./index.css";
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';



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
          <Link to="/" className="navigation__link"> Main</Link> 
          <Link to="/about" className="navigation__link"> About</Link> 
          <Link to="/menu" className="navigation__link"> Menu</Link>
          <Link to="/contact" className="navigation__link"> Contact </Link>
          <Link to="/login" className="navigation__link" onClick={this.toggleModalLogin}>Login </Link>
          <Link to="/signup" className="navigation__link" onClick={this.toggleModalSignup} > Sign Up</Link>
       

          <LoginForm show={this.state.isOpenLogin} onClose={this.toggleModalLogin}/>
          <SignupForm show={this.state.isOpenSignup} onClose={this.toggleModalSignup}/>

          </nav>

        

        
  );
}
}


export default Navigation ;