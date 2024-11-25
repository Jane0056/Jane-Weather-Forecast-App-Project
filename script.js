// Function to refresh weather details on the page
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-details");
  let windSpeedElement = document.querySelector("#speed-details");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  // Extracting data from the OpenWeatherMap response
  let temperature = response.data.main.temp;
  let city = response.data.name;
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let windSpeed = response.data.wind.speed;
  let iconCode = response.data.weather[0].icon;
  let date = new Date(response.data.dt * 1000);

 