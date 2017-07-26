import React from 'react';
import { Link } from 'react-router';

import Header from './Header';

const Main = React.createClass({
  render() {
    return (
      <div className="site-wrapper">
        <div className="site-cell">
          <div className="site-cell-content">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
})

export default Main;
