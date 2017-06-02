import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';

export const fetchConditionsSuccess = data => {
  return {
    type: types.FETCH_CONDITIONS_SUCCESS,
    conditions: {
      temperature: data.main.temp,
      description: data.weather.description,
    }
  }
}

export const fetchConditions = options => dispatch => {
  coordsAsync()
  .then( coords => {
    return getConditions(coords)
  })
  .then(response => {
    dispatch(fetchConditionsSuccess(response))
  })
  //1)get the coordinates from where they are stored
  //2) feed them to the weatherAPI call
  //3) then dispatch the success action with the
  //data from the weather api

}
