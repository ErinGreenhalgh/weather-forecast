import * as types from './actionTypes';
import { coordsAsync } from '../data/geolocation';
import { getSunriseData } from '../data/sunriseAndSunset';

export const fetchSunriseDataSuccess = (data) => {
  console.log('in success action:', data)
  return { type: types.FETCH_SUNRISE_DATA_SUCCESS, sunriseData: data }
}
export const fetchSunriseData = options => dispatch => {
  coordsAsync()
  .then(coords => {
    return getSunriseData(coords, "today")
  })
  .then(response => {
    console.log("sunriseData:", response)
    dispatch(fetchSunriseDataSuccess(response))
   })
  .catch(error => {
    console.log("sunrise data error:", error)
  });

};
