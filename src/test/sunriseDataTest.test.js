import fetchMock from 'fetch-mock';
import { fetchSunriseData } from '../data/sunriseAndSunset';

describe('sunrise data api', () => {

  afterEach( () => {
    // expect(fetchMock.calls().unmatched).toEqual([]);
    // fetchMock.restore();
    fetchMock.reset();
  });

  it('takes in coordinates and date and returns data', () => {
    let url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2017-05-11"

    const mockData = {
      results: {
        sunrise: "7:27:02 AM",
        sunset: "5:05:55 PM"
      }
    }
    fetchMock.get(url, {
      status: 200,
      body: mockData
    });

    const coords = {
      latitude: 36.7201600,
      longitude: -4.4203400
    }
    const date  = "2017-05-11"

    const data = fetchSunriseData(coords, date);
    expect(fetchMock.called()).toEqual(true);
    // expect(fetchMock.lastUrl()).toEqual(url);
    // expect(fetchMock.lastOptions()).toEqual("things")
    // expect(data.results.sunrise).toEqual("7:27:02 AM");
    // expect(data.results.sunset).toEqual("5:05:55 PM");
  })
})

//need to implement fetchMock to mock this api call?
