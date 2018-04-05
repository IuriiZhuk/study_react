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
      email : 'LOGIN'
      
     }
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

  getCurrnetUser = () => {
    let {email,password,orders} = JSON.parse(sessionStorage.getItem('currnet')); 
    
    return email
    // this.setState({
    //   email,
    //   password, 
    //  orders

    // })
     
    
  }

  



  firstVisit = () => {
   
    if (JSON.parse(sessionStorage.getItem('users') === null)) {
        return (
        <nav className = "navigation">
        <Link to="/" className="navigation__link"> Main</Link> 
        <Link to="/about" className="navigation__link"> About</Link> 
        <Link to="/menu" className="navigation__link"> Menu</Link>
        <Link to="/contact" className="navigation__link"> Contact </Link>
        <Link to="/signup" className="navigation__link" onClick={this.toggleModalSignup} > Sign Up</Link>
        
        
        <SignupForm show={this.state.isOpenSignup} onClose={this.toggleModalSignup}/>

      </nav>
      )
    } else if (JSON.parse(sessionStorage.getItem('currnet') === null) && JSON.parse(sessionStorage.getItem('users') !== null) ) {
      return (
        <nav className = "navigation">
        <Link to="/" className="navigation__link"> Main</Link> 
        <Link to="/about" className="navigation__link"> About</Link> 
        <Link to="/menu" className="navigation__link"> Menu</Link>
        <Link to="/contact" className="navigation__link"> Contact </Link>
        <Link to="/signup" className="navigation__link" onClick={this.toggleModalSignup} > Sign Up</Link>
        <Link to="/login" className="navigation__link" onClick={this.toggleModalLogin} >Login </Link>
       
        <SignupForm show={this.state.isOpenSignup} onClose={this.toggleModalSignup}/>
        <LoginForm show={this.state.isOpenLogin}  onClose={this.toggleModalLogin}/>
      </nav>
      )

    }
    

    return (
      <nav className = "navigation">
      <Link to="/" className="navigation__link"> Main</Link> 
      <Link to="/about" className="navigation__link"> About</Link> 
      <Link to="/menu" className="navigation__link"> Menu</Link>
      <Link to="/contact" className="navigation__link"> Contact </Link>
      <Link to="/signup" className="navigation__link" onClick={this.toggleModalSignup} > Sign Up</Link>
      
      <Link to="/personal" className="navigation__link" >{ this.getCurrnetUser()} </Link>
      <Link to="/login" className="navigation__link" onClick={this.toggleModalLogin} >Login </Link>
       
       <SignupForm show={this.state.isOpenSignup} onClose={this.toggleModalSignup}/>
       <LoginForm show={this.state.isOpenLogin}  onClose={this.toggleModalLogin}/>
     
      
      
    </nav>
    )
      
    
  }







    render () {
      console.log(`this.state`, this.state);
      console.log(`this.getCurrnetUser()`, this.getCurrnetUser());
          
      return (
          this.firstVisit()
  
        
  );
}
}


export default Navigation ;