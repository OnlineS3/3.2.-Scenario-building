import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';

import * as actionCreators from '../../actions/actionCreators';
import TableView from  './TableView';


class Table extends React.Component {

  constructor(props) {
    super(props);
    this.addItemToAnalysis = this.addItemToAnalysis.bind(this);
    this.removeItemFromAnalysis = this.removeItemFromAnalysis.bind(this);
  }

  componentDidMount() {
    console.log(this.props.analysisId);
    this.props.loadAnalysis(this.props.analysisId);
  }

  addItemToAnalysis(item) {
    console.log("Adding item: ", item);
    this.props.createItem(item, this.props.analysisId);
  }

  removeItemFromAnalysis(itemId) {
    this.props.deleteItem(itemId);
  }

  render() {
    return(
      <TableView props={{
          analysisId: this.props.analysisId,
          rows: this.props.analysisData.items,
          removeItemFromAnalysis: this.removeItemFromAnalysis,
          addItemToAnalysis: this.addItemToAnalysis,
          createAnalysis: this.props.createAnalysis
        }}
        />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    analysisData: state.analysisData,
    analysisId: ownProps.analysisId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadAnalysis: (analysisId) => dispatch(actionCreators.loadAnalysis(analysisId)),
    createItem: (item, analysisId) => dispatch(actionCreators.createItem(item, analysisId)),
    deleteItem: (itemId) => dispatch(actionCreators.deleteItem(itemId)),
    createAnalysis: () => dispatch(actionCreators.createAnalysis("Testianalyysi"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
