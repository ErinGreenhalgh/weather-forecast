import { sunriseDataReducer } from '../reducers/sunriseDataReducer';
import * as types from '../actions/actionTypes';

describe('sunrise data reducer', () => {
  it('should return default state if given no action', () => {
    const initialState = {}
    const action = {
      type: null
    }
    let actualState = sunriseDataReducer(initialState, action);

    expect(actualState).toEqual( {} )
  });

  it('should return state with sunrise and sunset data if data is successfully fetched', () => {
    const initialState = {}
    const action = {
      type: types.FETCH_SUNRISE_DATA_SUCCESS,
      sunriseData: {
        sunrise: "7 AM",
        sunset: "5 PM"
      }
    }

    let actualState = sunriseDataReducer(initialState, action);
    let expectedState = action.sunriseData

    expect(actualState).toEqual(expectedState);
  });

})
