const API_KEY = "6e892df8f08f0b4fe82ff7bedfb3b6ea";

function onGeoOk(position) {
    const lat =position.coords.latitude;
    const log =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

