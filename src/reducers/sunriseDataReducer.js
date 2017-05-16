import * as types from '../actions/actionTypes';

export const sunriseDataReducer = (state={}, action) => {
  switch(action.type){
    case types.FETCH_SUNRISE_DATA_SUCCESS:
      return Object.assign(state, action.sunriseData);
      break;
    default:
      return state;
  }
}
