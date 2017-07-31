import React from 'react';

import { render } from 'react-dom';

import './styles/main.scss';

import App from './components/App';
import Home from './components/Home';
import Analysis from './components/Analysis';
import ContentPage from './components/ContentPage';
import ApplicationMenu from './components/ApplicationMenu';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute name="about" component={ContentPage}></IndexRoute>
        <Route path="/applications" name="home" component={ApplicationMenu}></Route>
        <Route path="/application" name="home" component={Home}></Route>
        <Route path="/analysis/:analysisId" name="analysis" component={Analysis}></Route>
        <Route path="/:pageName" name="content-page" component={ContentPage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
