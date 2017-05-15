import * as types from '../actions/actionTypes';

export const sunriseDataReducer = (action, state = {}) => {
  switch(action.type){
    case types.FETCH_SUNRISE_DATA_SUCCESS:
      return Object.assign(state, action.sunriseData);
      break;
    default:
      return state;
  }
}
