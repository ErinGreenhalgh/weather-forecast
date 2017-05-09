const geo = navigator.geolocation;

const options = {
  timeout: 5000
}

const position = (success, error, options) => {
  return geo.getCurrentPosition(success, error, options);
}

export { options, position };
