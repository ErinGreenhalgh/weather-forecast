import { convertToLocalTime, convertMinutesToIso, convertIso8601ToMinutes } from '../../helpers/timeFormatter';

describe('time formatter', () => {
  it('converts an ISO 8601 datetime to time in minutes', () => {
    const isoTime1 = '2017-05-31T06:00:00';
    expect(convertIso8601ToMinutes(isoTime1)).toEqual(360);

    const isoTime2 = '2017-05-31T03:12:16';
    expect(convertIso8601ToMinutes(isoTime2)).toEqual(192);
  });

  it('converts time in minutes to an ISO 8601 time', () => {
    const minutes1 = 240;
    expect(convertMinutesToIso(minutes1)).toEqual("4:00");

    const minutes2 = 735;
    expect(convertMinutesToIso(minutes2)).toEqual("12:15");
  })

  it('converts time from UTC to local time', () => {
    const expectedDenverTime = '2017-05-31T06:00:00';
    const utcTime = '2017-05-31T12:00:00+00:00';

    const result = convertToLocalTime(utcTime);
    expect(result).toEqual(expectedDenverTime);
  });
});
