import { combineReducers } from 'redux';
import { sunriseDataReducer } from './sunriseDataReducer';

const rootReducer = combineReducers({
    sunriseData: sunriseDataReducer
});

export default rootReducer;
