import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../../store';

import * as actionCreators from '../../../actions/actionCreators';
import GridView from  './GridView';


class Grid extends React.Component {

  componentDidMount() {
    this.props.loadPestleData();
  }

  render() {
    return(
      <GridView props={{boxes: this.props.pestleData}}/>
    )
  }

}

function mapStateToProps(state) {
  return {
    pestleData: state.pestleData
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadPestleData: () => dispatch(actionCreators.loadPestleData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
