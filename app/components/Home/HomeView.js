import React from 'react';
import { Link } from 'react-router';

import Header from '../Header';
import Table from '../Table';
import ImpactGraph from '../ImpactGraph';
import Start from '../Start';


const HomeView = (props) => {
  const loggedIn = props.loggedIn
  console.log("Checking auth on HomeView: ", loggedIn)
  if (loggedIn) {
    return (
      <div>
        {loggedIn}
        <Start />
        <a href="/logout">Logout</a>
      </div>)
    } else {
      return (
        <div>
          {loggedIn}
          <div>
            <h3>Login to begin</h3>
            <a href="/login">Login</a>
          </div>
        </div>
      )
    }
  }

  // <a href="/logout">Logout</a>


  export default HomeView;
