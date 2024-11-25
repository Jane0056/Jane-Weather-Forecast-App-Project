// Function to update weather details
function weatherDetail(response) {
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-details");
  let windSpeedElement = document.querySelector("#speed-details");
  let temperatureElement = document.querySelector("#current-temperature-value");
  let iconElement = document.querySelector("#icon");
  let timeElement = document.querySelector("#time");

  // Fetch data from the API response
  let temperature = Math.round(response.data.main.temp);
  let cityName = response.data.name;
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let windSpeed = response.data.wind.speed;
  let iconUrl = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  // Update elements with API data
  cityElement.innerHTML = cityName;
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = `${humidity}%`;
  windSpeedElement.innerHTML = `${windSpeed} km/h`;
  temperatureElement.innerHTML = temperature;
  iconElement.innerHTML = `<img src="${iconUrl}" alt="${description}" class="weather-icon" />`;

  // Get and display current date and time
  let now = new Date();
  timeElement.innerHTML = formatDate(now);
}

// Function to format the date and time
function formatDate(date) {
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

  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

// Function to fetch weather details for a city
function searchCity(city) {
  let apiKey = "0c0fc4d0af9a25bbb3ad3644ab6e153c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(weatherDetail);
}

// Function to handle form submission
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value.trim());
}

// Add event listener to the search form
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

// Fetch default city weather on page load
searchCity("Berlin");
