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

//function to enable user to get weather results hitting enter key as well as 'onclick'

var input;

function setup() {
  input = document.getElementById('cityName');
  input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('searchbtn').click();
    }
  });
}

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options,
});
//AJAX request to openWeather API

function myWeather() {
  $('#getWeather').html('');
  var cityName = $('#cityName').val();

  var apiCall =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    cityName +
    '&appid=b5c7508c8f7b5e6bad730dc858c0756a&units=metric';

  $.getJSON(apiCall, weatherCallback);

  function weatherCallback(weatherData) {
    var cityName = weatherData.name;
    var country = weatherData.sys.country;
    var temp = weatherData.main.temp;
    var description = weatherData.weather[0].description;
    console.log(
      weatherData.name,
      weatherData.sys.country,
      weatherData.main.temp,
      weatherData.weather[0].description
    );
    $('#getWeather').append(
      cityName + ' ' + country + ' ' + temp + 'ºC' + ' ' + description
    );
  }
}

function clearCity() {
  document.getElementById('cityName').value = '';
}
