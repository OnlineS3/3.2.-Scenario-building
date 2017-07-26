import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import ImpactGraphView from './ImpactGraphView';


class ImpactGraph extends React.Component {

  componentDidMount() {
  }

  render() {
    return(
      <ImpactGraphView props={{data: this.props.data.items}}/>
    )
  }
}

function mapStateToProps(state) {
  console.log("State: ", state)
  return {
    data: state.analysisData
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImpactGraph);
