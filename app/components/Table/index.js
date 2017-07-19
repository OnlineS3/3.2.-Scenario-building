import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import TableView from  './TableView';


class Table extends React.Component {

  componentDidMount() {
    this.props.loadAnalysis(this.props.analysisId);
  }

  render() {
    return(
      <TableView props={{
          rows: this.props.analysisData,
          removeItem: this.props.removeItem,
          createItem: this.props.createItem,
          createAnalysis: this.props.createAnalysis
        }}
        />
    )
  }
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    analysisData: state.analysisData,
    analysisId: ownProps.analysisId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAnalysis: () => dispatch(actionCreators.loadAnalysis()),
    createItem: (item) => dispatch(actionCreators.createItem(item)),
    removeItem: (id) => dispatch(actionCreators.removeItem(id)),
    createAnalysis: () => dispatch(actionCreators.createAnalysis("Testianalyysi"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
