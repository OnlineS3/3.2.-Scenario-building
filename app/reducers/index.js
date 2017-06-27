import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pestleReducer from './pestle';

const rootReducer = combineReducers({ pestleData: pestleReducer, routing: routerReducer });

export default rootReducer;
