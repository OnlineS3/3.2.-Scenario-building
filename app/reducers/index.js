import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import exampleReducer from './example';

const rootReducer = combineReducers({ exampleReducer, routing: routerReducer });

export default rootReducer;
