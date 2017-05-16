import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';
import { getSunriseData } from '../data/sunriseAndSunset';

export const fetchSunriseDataSuccess = (data) => {
  console.log('success!')
  return { type: types.FETCH_SUNRISE_DATA_SUCCESS, sunriseData: data }
}
export const fetchSunriseData = options => dispatch => {
  coordsAsync()
  .then(coords => {
    getSunriseData(coords, "today")
  })
  .then(data => {
    dispatch(fetchSunriseDataSuccess(data))
   })
  .catch(error => {
    console.log("sunrise data error:", error)
  });

};
