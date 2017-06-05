import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';
import WeatherAPIMock from '../mockAPI/weatherConditionsMock';
import * as tempConverter from '../helpers/temperatureConverter';

export const fetchConditionsSuccess = data => {
  return {
    type: types.FETCH_CONDITIONS_SUCCESS,
    conditions: {
      temperature: tempConverter.kelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }
}

export const fetchConditions = options => dispatch => {
  coordsAsync()
  .then( coords => {
    return WeatherAPIMock.getConditions(coords)
  })
  .then(response => {
    dispatch(fetchConditionsSuccess(response))
  })
}
