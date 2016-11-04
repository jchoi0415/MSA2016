//This function will call the API and recieve the JSON output from it. 
function getResult() {
    $("#CityName").html("Receiving data...");
    $("#CityTemp").html("...");
    $("#CityCond").html("...");
    $("#CityWind").html("...");
    $("#CityHumid").html("...");
    var input = $('#cityInput').val();
    if (input === "") {
        $("#CityName").html("Do not leave it blank and enter a city!");
    }
    else {
        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=455f145f98daa9855ea05d16d17817ab", function (data) {
            console.log(data);
            if (input.toUpperCase() === data.name.toUpperCase()) {
                $("#CityName").html("Selected City: [ " + data.name + ", " + data.sys.country + " ]");
                $("#CityTemp").html("Temperature: [ " + (data.main.temp - 273.15).toFixed(2) + " &deg;C" + " ]");
                $("#CityCond").html("Condition: [ " + data.weather[0].main + " ]");
                $("#CityWind").html("Wind Speed: [ " + data.wind.speed + " m/s" + " ]");
                $("#CityHumid").html("Humidity: [ " + data.main.humidity + " %" + " ]");
            }
            else {
                $("#CityName").html("Please enter an existing city!");
            }
        });
    }
}
//This function will be called when the 'enter' button is clicked on the html page which will then call the getResult function for the API call
$(document).ready(function () {
    $('#enter').click(function () {
        getResult();
    });
});
