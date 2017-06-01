import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';
import { getSunriseData } from '../data/sunriseAndSunset';
import { convertToLocalTime } from '../helpers/timeFormatter';

export const fetchSunriseDataSuccess = (data) => {
  const sunrise = convertToLocalTime(data.results.sunrise);
  const sunset = convertToLocalTime(data.results.sunset);
  return { type: types.FETCH_SUNRISE_DATA_SUCCESS, sunriseData: {sunrise, sunset} }
}
export const fetchSunriseData = options => dispatch => {
  coordsAsync()
  .then(coords => {
    return getSunriseData(coords, "today")
  })
  .then(response => {
    dispatch(fetchSunriseDataSuccess(response.data))
   })
  .catch(error => {
    console.log("sunrise data error:", error)
  });

};
