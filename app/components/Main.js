import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import Header from './Header';

import * as auth from '../actions/authActionCreators';

class Main extends React.Component {

  componentDidMount() {
    this.props.checkAuthentication()
  }

  render() {
    return (
      <div className="site-wrapper">
        <Header />
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
