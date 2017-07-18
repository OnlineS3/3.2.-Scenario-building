import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import analysisReducer from './analysis';
import analysesReducer from './analyses';
import authReducer from './auth';

const rootReducer = combineReducers({
  analysisData: analysisReducer,
  analyses: analysesReducer,
  auth: authReducer,
  routing: routerReducer
});

export default rootReducer;
