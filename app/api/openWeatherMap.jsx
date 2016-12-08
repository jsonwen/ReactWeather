var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=5552a63fb92337ac3d4e682abdecb5e2&units=metric';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&type=accurate`;

    return axios.get(requestUrl).then(function(response){
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function(response){
      //throw new Error(response.data.message);
      throw new Error('Unable to fetch weather for location ' + location);
    });
  }
}
