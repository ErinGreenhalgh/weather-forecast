const convertToLocalTime = (utcTime) => {
  const offset = Date.getTimezoneOffset();
  //get the time in minutes from the utcTime
  //add the offset to the time in minutes
  //(will still work for negative offsets)
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
