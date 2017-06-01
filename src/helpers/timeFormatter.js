export const convertToLocalTime = (isoUtcTime) => {
  var date = new Date();
  const offset = date.getTimezoneOffset();
  const utcMinutes = convertIso8601ToMinutes(isoUtcTime);
  const rawTime = utcMinutes - offset;
  return convertMinutesToIso(rawTime);
}

export const convertMinutesToIso = (timeInMinutes) => {
  const hours = Math.floor(timeInMinutes / 60);
  var minutes = timeInMinutes % 60;
  if (minutes == 0) {
    minutes = "00"
  }
  //final formatting to string should be in a differnt method
  return hours.toString() + ":" + minutes.toString();

export const formatDisplayTime = (time) => {
  var hours = time.hours.toString();
  var minutes = time.minutes.toString();
  return correctlyAppendZeros(hours) + ":" + correctlyAppendZeros(minutes);
}

const correctlyAppendZeros = (time) => {
  if (time.length == 1) {
    time = "0" + time;
  }
  return time;
}

export const convertIso8601ToMinutes = (isoDateTime) => {
  var rawTime = isoDateTime.split("T")[1];
  var timeElements = rawTime.split(":");
  var times = timeElements.map( element => {
    return parseInt(element);
  })
  const hours = times[0];
  const minutes = times[1];
  const seconds = times[2];

  const totalMinutes = (hours * 60) + minutes + ( seconds / 60);
  return Math.round(totalMinutes);
}
