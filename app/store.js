import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { createBrowserHistory } from 'history';

import rootReducer from './reducers/index';

const defaultState = {
  analysisData: {analysis: {name: ""}, items: []},
  analyses: [],
  auth: {loggedIn: false}
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
