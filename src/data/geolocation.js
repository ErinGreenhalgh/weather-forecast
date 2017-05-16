const geo = navigator.geolocation;

const error = (err) => {
  return err.message;
}

const coordsAsync = () => {
  return new Promise((resolve, reject) => {
    return geo.getCurrentPosition((position) => {
      resolve({ latitude:  position.coords.latitude,
               longitude: position.coords.longitude })
    }, error);
    //the error callback should be replaced with a reject() function
    //containing the error message
  });
}

export { coordsAsync };
