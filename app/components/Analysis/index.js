import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import AnalysisView from './AnalysisView';


class Analysis extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <AnalysisView analysisId={this.props.params.analysisId} analysisData={this.props.analysisData} />
    )
    // return(
    //   <AnalysisView analysisId={this.props.params.analysisId} />
    // )
  }
}

function mapStateToProps(state) {
  console.log("MY ANALYSIS DATA: ", state.analysisData);
  return {
    analysisData: state.analysisData
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
