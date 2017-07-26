import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import store from '../../store';


class Nav extends React.Component {

  componentDidMount() {

  }

  render() {
    const logInOut = (loggedIn) => {
      if (loggedIn) {
        return <a className="Nav__link" href="/logout">Logout</a>
      } else {
        return <a className="Nav__link" href="/login">Login</a>
      }
    }
    console.log("auth: ", this.props.auth);

    return(
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/">Home</Link>
          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                {logInOut(this.props.auth.loggedIn)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
