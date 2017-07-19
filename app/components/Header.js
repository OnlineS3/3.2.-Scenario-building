import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

const Header = () => {
  return (
    <div>
      <Nav />
      <h1>Scenario building</h1>
      <p>This tool helps you in building scenarios.</p>
    </div>
  )
}

export default Header;
