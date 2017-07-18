import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div>
      <h1>Scenario building</h1>
      <p>This tool helps you in building scenarios.</p>
      <a href="/login">Login</a>
      <a href="/logout">Logout</a>
    </div>
  )
}

export default Header;
