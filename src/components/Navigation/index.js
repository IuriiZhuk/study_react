import React from 'react';

import Link from '../Link';
import "./index.css";

function Navigation() {
  return (
    <nav className = "navigation">
    <Link title ="About"/>
    <Link title ="Menu"/>
    <Link title ="Gallery"/>
    <Link title ="Contact"/>
    <Link title ="Login"/>
    <Link title ="Sign Up"/>
    </nav>
  );
}

export default Navigation ;