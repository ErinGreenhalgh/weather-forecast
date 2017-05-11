const sunriseAPI = "https://api.sunrise-sunset.org/json?"

const fetchSunriseData = (coords, date) => {
  fetch(sunriseAPI + "lat=" + coords.latitude + "&lng=" + coords.longitute + "&date=" + date, {
    method: 'GET',
  }).then(response => {
    return JSON.parse(response);
  })

export { fetchSunriseData }
