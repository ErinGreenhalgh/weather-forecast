const sunriseAPI = "https://api.sunrise-sunset.org/json?"

export const getSunriseData = (coords, date) => {
  fetch(sunriseAPI + "lat=" + coords.latitude + "&lng=" + coords.longitude + "&date=" + date, {
    method: 'GET',
  }).then(response => {
    return JSON.parse(response);
  })
}
