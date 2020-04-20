const todoform = document.querySelector(".js_todoform"),
  todoinput = todoform.querySelector("input"),
  todolist = document.querySelector(".js_todolist");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function delete_todo(event) {
  // const btn=event.target;
  // const li=btn.parentNode;
  // todolist.removeChild(li)
  // const cleanToDos=toDos.filter(function (toDo){
  //   return toDo.id!==parseInt(li.id)
  // })
  // toDos=cleanToDos
  const item = event.target.parentNode;
  console.log(item.id);
  todolist.removeChild(event.target.parentNode);
  toDos.splice(item.id - 1, 1);
  console.log(toDos);
  saveToDos();
}
function paintToDo(text) {
  const li1 = document.createElement("li");
  const delBtn = document.createElement("button");
  const span1 = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.addEventListener("click", delete_todo);
  delBtn.innerText = "😊";
  span1.innerText = text;
  li1.appendChild(span1);
  li1.appendChild(delBtn);
  li1.id = newId;
  console.log(todolist);
  todolist.appendChild(li1);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoinput.value;
  paintToDo(currentValue);
  todoinput.value = "";
}
function loadToDos() {
  const toDos1 = localStorage.getItem(TODOS_LS);
  if (toDos1 !== null) {
    const parsedtoDos = JSON.parse(toDos1);
    parsedtoDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
function init() {
  loadToDos();
  todoform.addEventListener("submit", handleSubmit);
}

init();
