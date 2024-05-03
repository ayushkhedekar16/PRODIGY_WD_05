function fetchWeather() {
    const apiKey = 'bc8e165465075df4866fe7a22d750e98'; 
    const location = document.getElementById('locationInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}

function displayWeather(data) {
    const locationName = document.getElementById('locationName');
    const weatherIcon = document.getElementById('weatherIcon');
    const weatherDescription = document.getElementById('weatherDescription');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    locationName.textContent = data.name + ', ' + data.sys.country;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">`;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = 'Temperature: ' + data.main.temp + '°C';
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    windSpeed.textContent = 'Wind Speed: ' + data.wind.speed + ' m/s';
}
