import React, {Component} from 'react';

import Link from '../Link';
import "./index.css";
import SignupForm from '../SignupForm';
import LoginForm from '../LoginForm';

class Navigation extends Component {
 
    render () {
 
  return (
    <nav className = "navigation">
    <Link title ="About"/>
    <Link title ="Menu"/>
    <Link title ="Gallery"/>
    <Link title ="Contact"/>
    <LoginForm />
    <SignupForm />
    </nav>
  );
}
}


export default Navigation ;