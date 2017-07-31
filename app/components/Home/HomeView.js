import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import Table from '../Table';
import ImpactGraph from '../ImpactGraph';
import Start from '../Start';
import Nav from '../Nav';



const HomeView = (props) => {
  const loggedIn = props.auth.loggedIn
  return <div >
    {(loggedIn) ?
      <div>
        <Start />
      </div>
      :
      <div>
        <div>
          <h3>Login to begin</h3>
          <a href="/login">Login</a>
        </div>
      </div>
    }
  </div>
}

// <a href="/logout">Logout</a>


export default HomeView;
