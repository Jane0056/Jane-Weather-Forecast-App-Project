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

  // Update the DOM elements
  cityElement.innerHTML = city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = `${humidity}%`;
  windSpeedElement.innerHTML = `${Math.round(windSpeed)} km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" class="weather-icon" />`;

  // Fetch the forecast for the city
  getForecast(city);
}

// Function to format the date and time
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

// Function to fetch weather details for a city
function searchCity(city) {
  let apiKey = "0c0fc4d0af9a25bbb3ad3644ab6e153c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios
    .get(apiUrl)
    .then(refreshWeather)
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        alert("City not found. Please try again.");
      } else {
        console.error("Error fetching weather data:", error); // Log other errors silently
      }
    });
}
