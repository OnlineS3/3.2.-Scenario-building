import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import TableView from  './TableView';


class Table extends React.Component {

  componentDidMount() {
    this.props.loadAnalysisData();
  }

  render() {
    return(
      <TableView props={{
          rows: this.props.analysisData,
          removeItem: this.props.removeItem,
          createItem: this.props.createItem
        }}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    analysisData: state.analysisData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAnalysisData: () => dispatch(actionCreators.loadAnalysisData()),
    createItem: (item) => dispatch(actionCreators.createItem(item)),
    removeItem: (id) => dispatch(actionCreators.removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
