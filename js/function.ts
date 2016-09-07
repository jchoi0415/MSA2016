$('#enter').click(function () {
    var cityName: string = $('#name').val();
    getWeather(cityName);
})

//Starts an API call to OpenWeather and display relevant data
function getWeather(cityName:string) {
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=455f145f98daa9855ea05d16d17817ab",
        function (data) {
            console.log(data);
            $("#results").html(data.name + " " 
                + Math.round((data.main.temp - 273.15) * 10) / 10
                + "\xB0C " 
                + data.weather[0].description);
        }
    )
}