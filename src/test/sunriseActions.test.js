import * as types from '../actions/actionTypes';
import * as actions from '../actions/sunriseActions';

//here we need to stub out the navigator.geolocation functionality

describe('sunrise actions', () => {
  it('returns an object as the success function', () => {
    let sunriseData = {
      sunrise: "7 AM",
      sunset: "5 PM"
    }

    let expectedAction = {
      type: types.FETCH_SUNRISE_DATA_SUCCESS,
      sunriseData
    }

    let actualAction = actions.fetchSunriseDataSuccess(sunriseData);

    expect(expectedAction).toEqual(actualAction);
  });

  
});
