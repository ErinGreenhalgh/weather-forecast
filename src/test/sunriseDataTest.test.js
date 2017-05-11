import { fetchSunriseData } from '../data/sunriseAndSunset';

describe('sunrise data api', () => {
  it('takes in coordinates and date and returns data', () => {
    const coords = {
      lat: 36.7201600,
      long: -4.4203400
    }
    const date  = "2017-05-11"

    const data = fetchSunriseData(coords, date);
    expect(data.results.sunrise).toEqual("7:27:02 AM");
    expect(data.results.sunset).toEqual("5:05:55 PM");
  })
})

//need to implement fetchMock to mock this api call?
