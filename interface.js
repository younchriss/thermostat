$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemp();

    $('#temp-up').click(function() {
        thermostat.up();
        updateTemp();
    })

    $('#temp-down').click(function() {
        thermostat.down();
        updateTemp();
    })

    $('#temp-reset').click(function() {
        thermostat.reset();
        updateTemp();
    })

    $('#temp-pwr-save').click(function() {
        thermostat.switch();
        updateTemp();
    })

    function updateTemp() {
        $('#temp').text(thermostat.temperature);
        $('#temp').attr('class', thermostat.energyUsage());
    };

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
    })
});

function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=6cd9af0e50879613be67c770c75f4a8d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
}

displayWeather('London');

$('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
})