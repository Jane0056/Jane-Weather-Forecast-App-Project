// Function to refresh weather details on the page
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-details");
  let windSpeedElement = document.querySelector("#speed-details");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  