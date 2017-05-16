import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';
import { getSunriseData } from '../data/sunriseAndSunset';

export const fetchSunriseDataSuccess = (data) => {
  return { type: types.FETCH_SUNRISE_DATA_SUCCESS, sunriseData: data.results }
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
