const cityName = 'Vaitape';
const appID = 'b5c7508c8f7b5e6bad730dc858c0756a';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appID}.json`;

function fetchWeatherData() {
  let req = $.ajax({
    url: url,
    type: 'GET',
    error: errorHandle,
    success: successHandle,
  });

  function errorHandle(obj, status, errorThrown) {
    console.log(status);
  }

  function successHandle(data, textStatus, jqXHR) {
    console.log(data);
    // dynamically build html based on the data
  }
}

$(document).ready(function (event) {
  fetchWeatherData();
});