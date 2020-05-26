$(document).ready(function () {
  const baseURL =
    'https://community-open-weather-map.p.rapidapi.com/weather?lat=-16.498520&lon=-151.741138&callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html';

  var settings = {
    async: true,
    crossDomain: true,
    url: baseURL,
    method: 'GET',
    dataType: 'json',
    data: { lat: -16.49852, lon: -151.741138 },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': 'e0424dd9b4msh9d649b578e70578p1d5f61jsnf2890bff5c2f',
    },
    success: successFunction,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  function successFunction(data, textStatus, jqXHR) {
    let icon =
      'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
    let temp = Math.floor(data.main.temp);
    let weather = data.weather[0].main;
    let wind = data.wind.speed;
    var temp = $('#temperature-value');
    temp.innerHTML = Math.floor(data.main.temp) + 'F';
  }

  function errorFunction(response) {
    console.log(response);
  }
});

// Display Weather
function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
}
