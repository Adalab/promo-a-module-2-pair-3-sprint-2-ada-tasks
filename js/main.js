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

//   for( const tasksItem of tasks) {
//     list.innerHTML += `<li class="li js_li"><input type="checkbox">${tasksItem.name}</li>`;
// }

list.innerHTML = `<li class="li js_li"><input class="js_check" type="checkbox"/>${tasks[1].name}</li>`;

/// evento si hacemos click en checkbox la tarea es completada,(if) si es completada se añade la clase tachado (classlist.add)

const checkBox = document.querySelector(".js_check");
const eachItem = document.querySelector(".js_li");
function handleChecK(ev) {
  console.log("hola");
  if (tasks[1].completed) eachItem.classList.add("tachado");
}

checkBox.addEventListener("click", handleChecK);
