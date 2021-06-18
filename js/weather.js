const API_KEY = "d8a56db04c58098cdfa7f8ad25776417"

function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span");
        const city = document.querySelector("#weather span:last-child");
        const icon = document.querySelector("#weather img");

        weather.innerText = `${data.main.temp}℃`;
        city.innerText = data.name;
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}

function geoError() {
    alert("Can't find your location!");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);