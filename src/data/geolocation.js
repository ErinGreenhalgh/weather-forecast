let geo = navigator.geolocation;

let position = (success, error, options) => {
  return geo.getCurrentPosition(success, error, options)
}

