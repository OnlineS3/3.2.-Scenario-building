import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

const Header = () => {
  return (
    <div className="header-wrapper">
      <h1>Scenario building</h1>
      <Nav />
    </div>
  )
}

export default Header;
