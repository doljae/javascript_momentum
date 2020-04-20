const weather=document.querySelector(".js_weather")
const COORDS = "coords";
const API_KEY = "e4c640070e9024414a9f5a8eab0a8aca";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function (response) {
    return response.json();
  }).then(function (json){
      console.log(json)
      const temperature=json.main.temp;
      const place=json.sys.country
      const country=json.country
      console.log(temperature, place)
      console.log(weather)
      weather.innerText=`${temperature} @ ${country} @ ${place}`
      weather.classList.add("center")
  })
}
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  console.log(position);
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
  };
  console.log(coordsObj);
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}
function handleGeoError(position) {
  console.log("error");
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  weather.classList.add("center")
  loadCoords();
}
init();
