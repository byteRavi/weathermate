let id = 'api_key';
let city = document.getElementById('city');
let temperature = document.getElementById('temp');
let description = document.getElementById('description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');

// Event listener for form submission
document.querySelector('form').addEventListener("submit", (e) => {
  e.preventDefault();
  if (valueSearch.value !== '') {
    searchWeather();
  }
});

// Function to fetch and display weather data
const searchWeather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${valueSearch.value}&units=metric&appid=${id}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.cod == 200) {
        // Update city and country details
        city.innerText = `${data.name}, ${data.sys.country}`;
        // Update temperature and weather icon
        temperature.innerText = data.main.temp;
        // Update weather description
        description.innerText = data.weather[0].description;
        // Update additional details
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
      } else {
        // Handle error and apply animation
        main.classList.add('error');
        setTimeout(() => {
          main.classList.remove('error');
        }, 1000);
      }
      valueSearch.value = ''; // Clear input field
    });
};
