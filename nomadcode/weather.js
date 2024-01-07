const API_KEY = "97d2bf5fd773702327a6e175e01bcc7e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        data.name = "Daegu";
        city.innerText = `위치: ${data.name}`;
        weather.innerText = `날씨: ${data.weather[0].main}, 기온: ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Cant find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);