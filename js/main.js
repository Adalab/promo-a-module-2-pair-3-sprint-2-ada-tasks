'use strict'

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

  const list = document.querySelector('.js_ul');


list.innerHTML= `
<li class="li"><input type="checkbox">Comprar pilas</li>`

/// evento si hacemos click en checkbox la tarea es completada,(if) si es completada se añade la clase tachado (classlist.add)