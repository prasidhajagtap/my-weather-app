const apiKey = '33fa0ac145624d7ea6c40048260304'; // Replace with your actual key from WeatherAPI.com
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const errorMsg = document.getElementById('error-msg');
const weatherDisplay = document.getElementById('weather-display');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    
    // Strict Validation: Alphabets only
    if (/^[A-Za-z\s]+$/.test(city)) {
        errorMsg.classList.add('d-none');
        fetchWeather(city);
    } else {
        errorMsg.classList.remove('d-none');
        weatherDisplay.classList.add('d-none');
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        
        // Update UI
        document.getElementById('temp').innerText = `${Math.round(data.current.temp_c)}°C`;
        document.getElementById('condition').innerText = data.current.condition.text;
        document.getElementById('humidity').innerText = `${data.current.humidity}%`;
        document.getElementById('wind').innerText = `${data.current.wind_kph} km/h`;
        
        weatherDisplay.classList.remove('d-none');
    } catch (error) {
        alert("Could not find that city. Please try again.");
    }
}
