const convertToLocalTime = (utcTime) => {
  const offset = Date.getTimezoneOffset();
  //get the time in minutes from the utcTime
  //add the offset to the time in minutes
  //(will still work for negative offsets)
}
