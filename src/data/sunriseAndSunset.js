import axios from 'axios'

const sunriseUrl = "https://api.sunrise-sunset.org/json?"

export const getSunriseData = ( coordinates, date ) => {
  let instance = axios.create({
    baseURL: sunriseUrl,
    timeout: 5000,
    params: {
      lat: coordinates.latitude,
      lng: coordinates.longitude,
      date
    }
  })

  return instance.get()
}
