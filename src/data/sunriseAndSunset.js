const sunriseAPI = "https://api.sunrise-sunset.org/json?"

export const fetchSunriseData = (coords, date) => {
  fetch(sunriseAPI + "lat=" + coords.latitude + "&lng=" + coords.longitude + "&date=" + date, {
    method: 'GET',
  }).then(response => {
    return JSON.parse(response);
  })
}
