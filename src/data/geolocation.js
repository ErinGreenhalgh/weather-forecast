let geo = navigator.geolocation;

let options = {
  timeout: 5000
}

const position = (success, error, options) => {
  return geo.getCurrentPosition(success, error, options);
}

export { position, options };
