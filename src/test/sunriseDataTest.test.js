import axios from 'axios';
import moxios from 'moxios';

import { getSunriseData }  from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  beforeEach( () => {
    moxios.install();
  });

  afterEach( () => {
    moxios.uninstall();
  })

  it('takes in coordinates and date and returns a promise', () => {
    let coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }

    let date = "2017-05-13"

    let expectedPromise = getSunriseData(coords, date);
    expect(expectedPromise instanceof Promise).toEqual(true);
  });

  it('returns sunrise data when promise resolves', () => {
    const coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }
    const date = '2017-05-31';

    const responseData = {
      "results": {
        // "sunrise": "5:00:20 AM",
        "sunrise": "10:00:20 AM",
        "sunset": "7:30:37 PM"
      },
      "status": "OK"
    }

    const expectedData = getSunriseData(coords, date).then( (data) => {
      return data;
    });

    moxios.wait( () => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: responseData
      }).then( (data) => {
        // console.log("data in moxios:", data)
        equal(true, false);
        expect(expectedData.results.sunrise).toEqual(responseData.results.sunrise);
        expect(expectedData.results.sunset).toEqual(responseData.results.sunset);
        // done();
      })
    });

    //moxios is stubbing out the api call
    //but any assertions inside the wait block seem to be skipped over

  })


});
