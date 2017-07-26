import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-heading">
          <h1>Scenario building</h1>
        </div>
        <Nav />
      </div>
    </div>
  )
}

export default Header;
