export const sunriseUrl = "https://api.sunrise-sunset.org/json?"

export const getSunriseData = (url, coords, date) => {
  let fullUrl = url + "lat=" + coords.latitude + "&lng=" + coords.longitude + "&date=" + date;
  console.log("fullUrl:", fullUrl);
  fetch(fullUrl).then(response => {
    console.log('response:', response)
    return response;
  }).catch(error => {
    console.log("error:", error)
  })
}
