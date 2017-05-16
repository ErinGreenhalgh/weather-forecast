import axios from 'axios';
import moxios from 'moxios';

import { getSunriseData }  from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  beforeEach( () => {
    moxios.install();
  });

  afterEach( () => {
    moxios.uninstall();
  });

  it('takes in coordinates and date and returns a promise', () => {
    let coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }

    let date = "2017-05-13"

    let expectedPromise = getSunriseData(coords, date);
    expect(expectedPromise instanceof Promise).toEqual(true);
  })

  it('returns position data when the promise resolves', () => {
    //make assertions;
  })

  // it('takes in coordinates and date and returns data', () => {
  //   let coords = {
  //     latitude: 36.7201600,
  //     longitude: -4.4203400
  //   }
  //
  //   let date = "2017-05-13"
  //
  //   let data = getSunriseData(coords, date);
  //
  //   const mockedResponse = { results:
  //     {
  //     sunrise: "7:27:02 AM",
  //     sunset: "5:05:55 PM"
  //     }
  //   }
  //
  //   moxios.wait( () => {
  //     let request = moxios.requests.mostRecent()
  //     request.respondWith({
  //       status: 200,
  //       response: mockedResponse
  //     }).then( () => {
  //       expect(data.results.sunrise).toEqual(mockedResponse.results.sunrise);
  //       expect(data.results.sunset).toEqual(mockedResponse.results.sunset);
  //     });
  //   });
  // });
});
