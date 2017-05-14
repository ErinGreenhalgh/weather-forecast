import fetchMock from 'fetch-mock';
import { sunriseUrl, getSunriseData }  from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  // afterEach( () => {
  //   // expect(fetchMock.calls().unmatched).toEqual([]);
  //   // fetchMock.restore();
  //   fetchMock.reset();
  // });

  it('takes in coordinates and date and returns data', () => {
    let url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2017-05-11"

    const options = {
      method: "GET",
      response: {
        results: {
          sunrise: "7:27:02 AM",
          sunset: "5:05:55 PM"
        },
      times: 3
      }
    }

    const response = {
      results: {
        sunrise: "7:27:02 AM",
        sunset: "5:05:55 PM"
      }
    }

    fetchMock.mock(url, options).catch();
    // fetchMock.mock(url, options).spy();

    const calls = fetchMock.calls(url);

    const coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }
    const date  = "2017-05-11"

    const data = getSunriseData(sunriseUrl, coords, date);

    console.log("calls:", calls);
    expect(fetchMock.called(url)).toEqual(true);


    // expect(fetchMock.lastUrl()).toEqual(url);
    // expect(fetchMock.lastOptions()).toEqual("things")
    // expect(data.results.sunrise).toEqual("7:27:02 AM");
    // expect(data.results.sunset).toEqual("5:05:55 PM");
  })
})
