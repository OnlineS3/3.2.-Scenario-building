import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import * as auth from '../../actions/authActionCreators';
import HomeView from './HomeView';


class Home extends React.Component {

  componentDidMount() {
    this.props.checkAuthentication()
  }

  render() {
    return(
      <HomeView auth={this.props.auth}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
