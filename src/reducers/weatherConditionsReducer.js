import * as types from '../actions/actionTypes';

export const weatherConditionsReducer = (state = {}, action) => {
  switch(action.type){
    case types.FETCH_CONDITIONS_SUCCESS:
      return Object.assign({}, state, action.conditions);
      break;
    default:
      return state;
  }
}
