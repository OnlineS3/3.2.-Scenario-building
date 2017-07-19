import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';

import StartView from './StartView';



class Start extends React.Component {

  componentDidMount() {
    this.props.loadAnalyses();
  }

  render() {
    return(
      <StartView props={{
          analyses: this.props.analyses,
          createAnalysis: this.props.createAnalysis
        }} />
    )
  }
}

function mapStateToProps(state) {
  return {
    analyses: state.analyses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAnalyses: () => dispatch(actionCreators.loadAnalyses()),
    createAnalysis: (values) => dispatch(actionCreators.createAnalysis(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
