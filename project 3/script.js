const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityElement = document.getElementById('city');
const tempElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityElement.textContent = data.name;
            tempElement.textContent = $(data.maintemp) + "*c";
            weatherDescriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});
