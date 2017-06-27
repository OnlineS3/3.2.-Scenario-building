import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../../store';

import * as actionCreators from '../../../actions/actionCreators';
import PestleBoxView from './PestleBoxView';


class PestleBox extends React.Component {

  componentDidMount() {
  }

  render() {
    return(
      <PestleBoxView box={this.props.box} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    box: ownProps.props.box
  }
}


function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PestleBox);
