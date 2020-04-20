const form = document.querySelector(".js_form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js_greetings");

const USER_LS = "current_user",
  SHOWING_CN = "showing";

function paint_greeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  greeting.classList.add("center1")
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const current_value = input.value;
  paint_greeting(current_value);
  //console.log(current_value);
  saveName(current_value);
}
function ask_for_name() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function loadName() {
  const current_user = localStorage.getItem(USER_LS);
  if (current_user == null) {
    //console.log("no current_user exists!!");
    ask_for_name();
  } else {
    paint_greeting(current_user);
  }
}

function init() {
  loadName();
}
init();
