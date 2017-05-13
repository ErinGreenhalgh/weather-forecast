const geo = navigator.geolocation;

const success = (position) => {
  return { lat:  position.coords.latitude,
           long: position.coords.longitude };
}

const error = (err) => {
  return err.message;
}

const options = {
  timeout: 5000
}

const coordsAsync = (success, error, options) => {
  return new Promise((resolve, reject) => {
    geo.getCurrentPosition(success, error, options);
  });
}

export { success, error, options, coordsAsync };
