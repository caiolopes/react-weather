import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5b4633d5aef32fd1e85dc54a51fc0644&units=metric';

function getTemp(location) {
  const encondedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encondedLocation}`;

  return axios.get(requestUrl)
    .then((res) => {
      return res.data.main.temp;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
}

export default { 
  getTemp
};