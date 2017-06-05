import { combineReducers } from 'redux';
import { sunriseDataReducer } from './sunriseDataReducer';
import { weatherConditionsReducer } from './weatherConditionsReducer';

const rootReducer = combineReducers({
    sunriseData: sunriseDataReducer,
    weatherConditions: weatherConditionsReducer
});

export default rootReducer;
