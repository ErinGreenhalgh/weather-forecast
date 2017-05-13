const geo = navigator.geolocation;

const options = {
  timeout: 5000
}

const coordsAsync = (success, error, options) => {
  return new Promise((resolve, reject) => {
    geo.getCurrentPosition(success, error, options);
  });
}

export { options, position };
