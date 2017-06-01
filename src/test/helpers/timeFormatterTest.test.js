import { convertToLocalTime } from '../../helpers/timeFormatter';

describe('time formatter', () => {
  it('converts time from UTC to local time', () => {
    const expectedDenverTime = '2017-05-31T06:00:00';
    const utcTime = '2017-05-31T12:00:00+00:00';

    const result = convertToLocalTime(utcTime);
    expect(result).toEqual(expectedDenverTime);
  })
})
