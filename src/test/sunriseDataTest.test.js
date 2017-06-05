import axios from 'axios';
import { getSunriseData }  from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  it('takes in coordinates and date and returns a promise', () => {
    let coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }

    let date = "2017-05-13"

    let expectedPromise = getSunriseData(coords, date);
    expect(expectedPromise instanceof Promise).toEqual(true);
  });
});
