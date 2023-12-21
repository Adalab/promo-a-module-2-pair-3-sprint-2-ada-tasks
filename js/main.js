"use strict";

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

/// QUERY-SELECTOR:

const list = document.querySelector(".js_ul");

// const  = document.querySelector('.js_btn');

/*
for( const tasksItem of tasks) {
  list.innerHTML += `<li class="li js_li"><input class="js_check" type="checkbox" value="">${tasksItem.name}</li>`;
}
*/

for (let i = 0; i < tasks.length; i++) {
  list.innerHTML += `<li class="li js_li"><input class="js_check" type="checkbox" value="${i}">${tasks[i].name}</li>`;
}

// list.innerHTML = `<li class="li js_li"><input class="js_check" type="checkbox"/>${tasks[1].name}</li>`;

/// evento si hacemos click en checkbox la tarea es completada,(if) si es completada se añade la clase tachado (classlist.add)
// hacemos una variable que englobe a todos los checkboxs
const checkBoxs = document.querySelectorAll(".js_check");
const eachItem = document.querySelector(".js_li");

function handleChecK(event) {
  console.log("hola");
  console.log(event.target.value);
  if (tasks[event.target.value].completed) {
    //eachItem.classList.toggle("tachado");
    tasks[event.target.value].completed = false;
  } else {
    tasks[event.target.value].completed = true;
  }
  for (let i = 0; i < tasks.length; i++) {
    list.innerHTML += `<li class="li js_li"><input class="js_check" type="checkbox" value="${i}">${tasks[i].name}</li>`;
  }
  for (const checkBox of checkBoxs) {
    checkBox.addEventListener("click", handleChecK);
  }
}

for (const checkBox of checkBoxs) {
  checkBox.addEventListener("click", handleChecK);
}

/// cuando esta completed