import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import analysisReducer from './analysis';
import analysesReducer from './analyses';
import authReducer from './auth';
import { reducer as formReducer } from 'redux-form'; 

const rootReducer = combineReducers({
  analysisData: analysisReducer,
  analyses: analysesReducer,
  auth: authReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
