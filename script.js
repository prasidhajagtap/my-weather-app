//script.js
const apiKey = 'YOUR_WEATHERAPI_KEY';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    // Input Validation: Alphabets only as requested
    if (/^[A-Za-z\s]+$/.test(city)) {
        fetchWeather(city);
    } else {
        alert("Please enter a valid city name (alphabets only).");
    }
});

async function fetchWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    document.getElementById('temp').innerText = `${data.current.temp_c}°C`;
    document.getElementById('condition').innerText = data.current.condition.text;
}
