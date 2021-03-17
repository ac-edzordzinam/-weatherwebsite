
const axios = require('axios')

const forecast = (cityName, callback) => {
      
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=8514816e1ad7d759e670b54dfc50ac6a`

  axios.get(url)
    .then((response) => {
      // handle success
      callback(undefined, response.data.weather[0].description + ' It is currently ' + response.data.main.temp + ' degrees out.');
    })
    .catch((error) => {
      // handle error
      console.log(error.message)
      callback('Unable to connect to weather service!');
    })
}
module.exports = forecast