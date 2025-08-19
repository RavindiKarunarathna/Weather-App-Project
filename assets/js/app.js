console.log("js loaded");

AOS.init();

//------------------------------Set Date-----------------------------------
let date = new Date();
console.log(date);
formatDate = {
    "weekday": `long`,
    "month": `long`,
    "year": `numeric`,
    "day": `numeric`
}

let currentDate = date.toLocaleDateString("en-US", formatDate);
console.log(currentDate);

document.getElementById("local-date").textContent = currentDate;

//-----------------------Set Time---------------------------------------------------

let time = new Date();
console.log(time);
formatTime = {
    "hour": `numeric`,
    "minute": `numeric`,
    "time": `long`
}

let currentTime = time.toLocaleTimeString("en-US", formatTime);
console.log(currentTime);

document.getElementById("local-time").textContent = currentTime;

//------------------------------------------------------------------------------------


function callApi() {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=e1b3044a1e8b427ea0c165610251808&q=${document.getElementById("search-location").value}&days=7&aqi=no&alerts=no`)
     
        // .then(responce => responce.json())
        // .then(data => console.log(data))

        .then(responce => responce.json())
        .then(data => {
            console.log(data);
            setDetails(data);
        });

    // let responce = await fetch("http://api.weatherapi.com/v1/current.json?key=e1b3044a1e8b427ea0c165610251808&q=gampaha&aqi=no")
    // let data = await responce.json();
    // console.log(data);

    //setDetails(data);

}

function setDetails(data) {
    document.getElementById("location-name").innerText = data.location.name + "," + data.location.region + "," + data.location.country;
    document.getElementById("main-icon").src = data.current.condition.icon;
    document.getElementById("condition-text").innerText=data.current.condition.text;
    document.getElementById("temperature").innerText = data.current.temp_c + "°C / " + data.current.temp_f+"°F";
    document.getElementById("feels-like").innerText = data.current.feelslike_c;
    document.getElementById("wind-speed").innerText = data.current.wind_kph+" KPH";
    document.getElementById("humidity").innerText=data.current.humidity+"%";
    document.getElementById("cloud-cover").innerText=data.current.cloud+"%";
    document.getElementById("uv-index").innerText=data.current.uv;
    document.getElementById("pressure").innerText=data.current.pressure_mb+" hPa";
    document.getElementById("visibility").innerText=data.current.vis_km+" km";

//---------Hourly ForCast---------------------------------------------------------------

    document.getElementById("1-hour-icon").src=data.forecast.forecastday[0].hour[0].condition.icon;
    document.getElementById("1-hour-temp").innerText=data.forecast.forecastday[0].hour[0].temp_c+"°C";

    document.getElementById("2-hour-icon").src=data.forecast.forecastday[0].hour[2].condition.icon;
    document.getElementById("2-hour-temp").innerText=data.forecast.forecastday[0].hour[2].temp_c+"°C";
    
    document.getElementById("3-hour-icon").src=data.forecast.forecastday[0].hour[4].condition.icon;
    document.getElementById("3-hour-temp").innerText=data.forecast.forecastday[0].hour[4].temp_c+"°C";
    
    document.getElementById("4-hour-icon").src=data.forecast.forecastday[0].hour[6].condition.icon;
    document.getElementById("4-hour-temp").innerText=data.forecast.forecastday[0].hour[6].temp_c+"°C";

    document.getElementById("5-hour-icon").src=data.forecast.forecastday[0].hour[8].condition.icon;
    document.getElementById("5-hour-temp").innerText=data.forecast.forecastday[0].hour[8].temp_c+"°C";
    
    document.getElementById("6-hour-icon").src=data.forecast.forecastday[0].hour[10].condition.icon;
    document.getElementById("6-hour-temp").innerText=data.forecast.forecastday[0].hour[10].temp_c+"°C";
    
    document.getElementById("7-hour-icon").src=data.forecast.forecastday[0].hour[12].condition.icon;
    document.getElementById("7-hour-temp").innerText=data.forecast.forecastday[0].hour[12].temp_c+"°C";
    
    document.getElementById("8-hour-icon").src=data.forecast.forecastday[0].hour[14].condition.icon;
    document.getElementById("8-hour-temp").innerText=data.forecast.forecastday[0].hour[14].temp_c+"°C";
    
    document.getElementById("9-hour-icon").src=data.forecast.forecastday[0].hour[16].condition.icon;
    document.getElementById("9-hour-temp").innerText=data.forecast.forecastday[0].hour[16].temp_c+"°C";
    
    document.getElementById("10-hour-icon").src=data.forecast.forecastday[0].hour[18].condition.icon;
    document.getElementById("10-hour-temp").innerText=data.forecast.forecastday[0].hour[18].temp_c+"°C";
    
    document.getElementById("11-hour-icon").src=data.forecast.forecastday[0].hour[20].condition.icon;
    document.getElementById("11-hour-temp").innerText=data.forecast.forecastday[0].hour[20].temp_c+"°C";
    
    document.getElementById("12-hour-icon").src=data.forecast.forecastday[0].hour[22].condition.icon;
    document.getElementById("12-hour-temp").innerText=data.forecast.forecastday[0].hour[22].temp_c+"°C";


//----------------------Daily ForCast---------------------------------------------------------

    document.getElementById("1-day-icon").src=data.forecast.forecastday[0].day.condition.icon;
    document.getElementById("1-day-temp").innerText=data.forecast.forecastday[0].day.maxtemp_c+"°C / "+data.forecast.forecastday[0].day.mintemp_c+"°C";

    document.getElementById("2-day-icon").src=data.forecast.forecastday[1].day.condition.icon;
    document.getElementById("2-day-temp").innerText=data.forecast.forecastday[1].day.maxtemp_c+"°C / "+data.forecast.forecastday[1].day.mintemp_c+"°C";

    document.getElementById("3-day-icon").src=data.forecast.forecastday[2].day.condition.icon;
    document.getElementById("3-day-temp").innerText=data.forecast.forecastday[2].day.maxtemp_c+"°C / "+data.forecast.forecastday[2].day.mintemp_c+"°C";

    document.getElementById("4-day-icon").src=data.forecast.forecastday[3].day.condition.icon;
    document.getElementById("4-day-temp").innerText=data.forecast.forecastday[3].day.maxtemp_c+"°C / "+data.forecast.forecastday[3].day.mintemp_c+"°C";

    document.getElementById("5-day-icon").src=data.forecast.forecastday[4].day.condition.icon;
    document.getElementById("5-day-temp").innerText=data.forecast.forecastday[4].day.maxtemp_c+"°C / "+data.forecast.forecastday[4].day.mintemp_c+"°C";

    document.getElementById("6-day-icon").src=data.forecast.forecastday[5].day.condition.icon;
    document.getElementById("6-day-temp").innerText=data.forecast.forecastday[5].day.maxtemp_c+"°C / "+data.forecast.forecastday[5].day.mintemp_c+"°C";

    document.getElementById("7-day-icon").src=data.forecast.forecastday[6].day.condition.icon;
    document.getElementById("7-day-temp").innerText=data.forecast.forecastday[6].day.maxtemp_c+"°C / "+data.forecast.forecastday[6].day.mintemp_c+"°C";

}

callApi();




