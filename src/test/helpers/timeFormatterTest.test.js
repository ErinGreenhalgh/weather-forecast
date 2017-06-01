import * as formatter from '../../helpers/timeFormatter';

describe('time formatter', () => {
  it('converts an ISO 8601 datetime to time in minutes', () => {
    const isoTime1 = '2017-05-31T06:00:00';
    expect(formatter.convertIso8601ToMinutes(isoTime1)).toEqual(360);

    const isoTime2 = '2017-05-31T03:12:16';
    expect(formatter.convertIso8601ToMinutes(isoTime2)).toEqual(192);
  });

  it('correctly formats the display time', () => {
    const time1 = {
      hours: 11,
      minutes: 13
    }

    const time2 = {
      hours: 6,
      minutes: 15
    }

    const time3 = {
      hours: 10,
      minutes: 20
    }

    const time4 = {
      hours: 15,
      minutes: 3
    }

    const time5 = {
      hours: 0,
      minutes: 0
    }

    expect(formatter.formatDisplayTime(time1)).toEqual('11:13');
    expect(formatter.formatDisplayTime(time2)).toEqual('06:15');
    expect(formatter.formatDisplayTime(time3)).toEqual('10:20');
    expect(formatter.formatDisplayTime(time4)).toEqual('15:03');
    expect(formatter.formatDisplayTime(time5)).toEqual('00:00');
  })

  it('converts time in minutes to an ISO 8601 time', () => {
    const minutes1 = 240;
    expect(formatter.convertMinutesToIso(minutes1)).toEqual("04:00");

    const minutes2 = 735;
    expect(formatter.convertMinutesToIso(minutes2)).toEqual("12:15");
  })

  it('converts time from UTC to local time', () => {
    const expectedDenverTime = '06:00';
    const utcTime = '2017-05-31T12:00:00+00:00';

    const result = formatter.convertToLocalTime(utcTime);
    expect(result).toEqual(expectedDenverTime);
  });

  it('converts to local time, correctly accounting for 24 hour clock', () => {
    const utcTime = '2017-05-31T02:22:15+00:00';
    const expectedLocalTime = '20:22';

    const result = formatter.convertToLocalTime(utcTime);
    expect(result).toEqual(expectedLocalTime);
  })
});
