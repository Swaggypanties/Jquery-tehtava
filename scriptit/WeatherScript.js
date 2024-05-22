$(document).ready(function() {
$("#LureReturn").click(function() {
    $("body").fadeOut(500, function() {
        window.location.href = "menu.html";
    });
});
});
$(document).ready(function() {
    // Define the API key and base URL
    const apiKey = 'da127b898f1361a34642b93e37827af8'; // Replace 'your_api_key_here' with your actual API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    // Function to get weather data
    function getWeather(lat, lon) {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            data: {
                lat: lat,
                lon: lon,
                appid: apiKey,
                units: 'metric' // Use 'imperial' for Fahrenheit
            },
            success: function(response) {
                console.log(response);
                displayWeather(response);
            },
            error: function(error) {
                console.error('Error fetching weather data', error);
            }
        });
    }

    // Function to display weather data
    function displayWeather(data) {
        const weatherHtml = `
            <h4>Location: ${data.name}</h4>
            <h4>Temperature: ${data.main.temp} °C</h4>
            <h4>Weather: ${data.weather[0].description}</h4>
        `;
        $('#box2').find('#weatherInfo').html(weatherHtml);
    }

    // Get current position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        }, function(error) {
            console.error('Error getting location', error);
            // Default to a specific location if geolocation fails
            const defaultLat = 60.192059; // Example: San Francisco
            const defaultLon = 24.945831;
            getWeather(defaultLat, defaultLon);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Default to a specific location if geolocation is not supported
        const defaultLat = 37.7749; // Example: San Francisco
        const defaultLon = -122.4194;
        getWeather(defaultLat, defaultLon);
    }

    
    });