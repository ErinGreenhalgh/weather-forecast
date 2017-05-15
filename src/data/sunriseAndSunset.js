import axios from 'axios'

export const sunriseUrl = "https://api.sunrise-sunset.org/json?"

export const getSunriseData = () => {
  let instance = axios.create({
    baseURL: "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=2017-05-11",
    timeout: 5000
  })

  instance.get().then( (response) => {
    console.log('data in method:', response.data)
    return response.data;
  })
}
