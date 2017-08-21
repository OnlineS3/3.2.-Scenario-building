import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import store from '../../store';
import sections from './content/sections';

import ContentPageView from './ContentPageView';


class ContentPage extends React.Component {

  componentDidMount() {
  }

  render() {
    let section = sections[this.props.params.pageName]
    section = (section) ? section : sections["about"]
    return(
      <ContentPageView props={{pageName: this.props.params.pageName}}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    sections: sections
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
