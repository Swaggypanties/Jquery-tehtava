$(document).ready(function() {
$("#LureReturn").click(function() {
    $("body").fadeOut(500, function() {
        window.location.href = "menu.html";
    });
});
});
$(document).ready(function() {
    
    const apiKey = 'da127b898f1361a34642b93e37827af8';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    // Keli tiedot
    function getWeather(lat, lon) {
        $.ajax({
            url: apiUrl,
            method: 'GET',
            data: {
                lat: lat,
                lon: lon,
                appid: apiKey,
                units: 'metric'
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

    // Tuo kelin esille html tiedostossa
    function displayWeather(data) {
        const weatherHtml = `
            <h4>Location: ${data.name}</h4>
            <h4>Temperature: ${data.main.temp} °C</h4>
            <h4>Weather: ${data.weather[0].description}</h4>
        `;
        $('#box2').find('#weatherInfo').html(weatherHtml);
    }

    // Hakea nykyistä sijaintia
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeather(lat, lon);
        }, function(error) {
            console.error('Error getting location', error);
            // Jos ei löydy niin sijainti on automaattisesti Helsinki
            const defaultLat = 60.192059; 
            const defaultLon = 24.945831;
            getWeather(defaultLat, defaultLon);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
        // Jos selain ei tue niin oletusarvo on Helsinki
        const defaultLat = 60.192059; 
        const defaultLon = 24.945831;
        getWeather(defaultLat, defaultLon);
    }

    
    });