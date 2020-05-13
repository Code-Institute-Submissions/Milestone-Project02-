const cityName = 'Vaitape';
const appID = 'b5c7508c8f7b5e6bad730dc858c0756a';
http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appID}.json














class Weather {
  constructor(city) {
    this.apiKey = 'b5c7508c8f7b5e6bad730dc858c0756a';
  }

  // Fetch weather API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={this.apikey}.json`
    );

    const responseData = await response.json();

    return responseData.current_observation;
  }
}
