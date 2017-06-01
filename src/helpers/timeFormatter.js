export const convertToLocalTime = (isoUtcTime) => {
  var date = new Date();
  const offset = date.getTimezoneOffset();
  console.log("offset:", offset)
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
