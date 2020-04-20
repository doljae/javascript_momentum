const clock_container = document.querySelector(".js_clock");
const clock_title = clock_container.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clock_title.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clock_title.classList.add("text_magic");

}
function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
