import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import analysisReducer from './analysis';

const rootReducer = combineReducers({ analysisData: analysisReducer, routing: routerReducer });

export default rootReducer;
