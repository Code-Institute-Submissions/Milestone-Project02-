// SELECT ELEMENTS
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

class Weather {
  constructor(city) {
    this.apiKey = 'b5c7508c8f7b5e6bad730dc858c0756a';