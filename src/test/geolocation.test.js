import { success, error, options, coordsAsync } from '../data/geolocation';
import mockGeolocation from 'mock-geolocation';


describe('geolocation api access', () => {
  it('can get position coordinates asynchronously', () => {
    console.log("mock geo:", mockGeolocation)

    var mockCoords = { lat: 36.7201600, long: -4.4203400 }
    mockGeolocation.use();
    mockGeolocation.send({ lat: mockCoords.lat, lng: mockCoords.long })

    const asyncResults = coordsAsync(success, error, options)
    expect(asyncResults).toEqual("something")

    mockGeolocation.restore();
  })


//in the test env, no access to the browser
//and therefore no access to the navigator
//how to test this??

});
//have to stub the api call
