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
      <AnalysisView analysisId={"05686df0-047c-478e-97f1-a7f01be12f9"} />
    )
    // return(
    //   <AnalysisView analysisId={this.props.params.analysisId} />
    // )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);
