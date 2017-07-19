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
      <AnalysisView analysisId={this.props.params.analysisId} />
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
