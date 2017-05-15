import axios from 'axios';
import moxios from 'moxios';

import { sunriseUrl, getSunriseData }  from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  beforeEach( () => {
    moxios.install();
  });

  afterEach( () => {
    moxios.uninstall();
  });

  it('takes in coordinates and date and returns data', () => {
    let data = getSunriseData();

    const mockedResponse = { results:
      {
      sunrise: "7:27:02 AM",
      sunset: "5:05:55 PM"
      }
    }

    moxios.wait( () => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: mockedResponse
      }).then( () => {
        expect(data.results.sunrise).toEqual(mockedResponse.results.sunrise);
        expect(data.results.sunset).toEqual(mockedResponse.results.sunset);
      });
    });
  });
});
