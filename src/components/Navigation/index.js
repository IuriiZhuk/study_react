import React from 'react';

import Link from '../Link';
import "./index.css";
import SignupForm from '../SignupForm';

function Navigation() {
  return (
    <nav className = "navigation">
    <Link title ="About"/>
    <Link title ="Menu"/>
    <Link title ="Gallery"/>
    <Link title ="Contact"/>
    <Link title ="Login"/>
    <SignupForm />
    </nav>
  );
}

export default Navigation ;