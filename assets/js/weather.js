// API key = d17999dddb25e373cdd4d9bd55b6359e;

var city;

window.onload = function () {
  city = 'Kenmare';
  $.getJSON(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=metric&appid=b5c7508c8f7b5e6bad730dc858c0756a',
    function (data) {
      console.log(data);

      var icon =
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

      var temp = Math.floor(data.main.temp);
      var weather = data.weather[0].main;
      var wind = data.wind.speed;

      $('.city').text('City: ' + city);
      $('.icon').attr('src', icon);
      $('.weather').text('Weather: ' + weather);
      $('.temp').text('Temperature: ' + temp);
      $('.wind').text('Wind: ' + wind);
    }
  );
};

function sendToPage() {
  city = document.getElementById('search_weather').value;
  $.getJSON(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=metric&appid=b5c7508c8f7b5e6bad730dc858c0756a',
    function (data) {
      console.log(data);

      var icon =
        'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

      var temp = Math.floor(data.main.temp);
      var weather = data.weather[0].main;
      var wind = data.wind.speed;

      $('.city').text('City: ' + city);
      $('.icon').attr('src', icon);
      $('.weather').text('Weather: ' + weather);
      $('.temp').text('Temperature: ' + temp);
      $('.wind').text('Wind: ' + wind);
    }
  );
}
