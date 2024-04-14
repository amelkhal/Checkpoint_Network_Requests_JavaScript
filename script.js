document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '23135d3ecdcb4e6ab87171825241404'; //WeatherAPI key
    const form = document.getElementById('location-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const locationInput = document.getElementById('location-input').value;
        const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + locationInput;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const location = data.location.name + ', ' + data.location.country;
                const temperature = data.current.temp_c; // Temperature in Celsius
                const description = data.current.condition.text;

                document.getElementById('location').innerText = location;
                document.getElementById('temperature').innerText = 'Temperature: ' + temperature + '°C';
                document.getElementById('description').innerText = 'Description: ' + description;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    });
});
