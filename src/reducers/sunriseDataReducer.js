import * as types from '../actions/actionTypes';

export const sunriseDataReducer = (state=null, action) => {
  debugger;
  switch(action.type) {
    case types.FETCH_SUNRISE_DATA_SUCCESS:
      return { action.sunriseData; }
      //comes in as results: sunrise:, sunset:
      //might want to reformulate this
      default:
        return state;
  }
}
