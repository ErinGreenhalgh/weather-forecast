import * as tempConverter from '../../helpers/temperatureConverter';

describe('temperature converter', () => {
  it('converts Kelvin to Fahrenheit, rounding correctly', () => {
    const kelvin1 = 0;
    const kelvin2 = 300;
    const kelvin3 = 255.37;

    expect(tempConverter.kelvinToFahrenheit(kelvin1)).toEqual(-459);
    expect(tempConverter.kelvinToFahrenheit(kelvin2)).toEqual(81);
    expect(tempConverter.kelvinToFahrenheit(kelvin3)).toEqual(0);
  })
})
