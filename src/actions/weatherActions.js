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
}
