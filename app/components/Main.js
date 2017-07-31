import React from 'react';

import { render } from 'react-dom';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from './Header';

import * as auth from '../actions/authActionCreators';

class Main extends React.Component {

  componentDidMount() {
    this.props.checkAuthentication()
  }

  componentDidUpdate() {
    const loginHandlers = <div>
      {(this.props.auth.loggedIn) ?
        <a href="/logout"><button className='login-btn'>Logout</button></a>
        :
        <div>
          <a href="/login"><button className='login-btn'>Log in</button></a>
          <a href="/login"><button className='register-btn'>Register</button></a>
        </div>
      }
    </div>
    render(loginHandlers, document.getElementById('login-handlers'));
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-cell">
          <div className="site-cell-content">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkAuthentication: () => dispatch(auth.checkAuthentication())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
