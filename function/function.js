import Tarea from '../class/tarea.js';

const ul = document.getElementById('listadoAgenda');

let agenda;
let id;
function guardarTarea(event) {
    event.preventDefault();
    if (localStorage.getItem('agenda') && (agenda.length !== 0)) {
        agenda = JSON.parse(localStorage.getItem('agenda'));
        id = agenda.slice(-1)[0].idTarea;
    } else {
        id = 0;
        agenda = [];
    };
    id++;
    const idTarea = id;
    const inputTitulo = document.getElementById('inputTitulo').value;
    const inputPrioridad = document.getElementById('inputPrioridad').value;
    const nuevaTarea = new Tarea(idTarea, inputTitulo, inputPrioridad);

    // Agrego la nueva tarea al array
    agenda.push(nuevaTarea);

    //Guardar en LocalStorage
    localStorage.setItem('agenda', JSON.stringify(agenda));
    alert('Tarea creada correctamente');
    listarAgenda();
};


function listarAgenda() {
    ul.innerHTML = '';
    agenda = JSON.parse(localStorage.getItem('agenda'));
    for (let tarea of agenda) {
        ul.innerHTML += `<li> idTarea: ${tarea.idTarea}  -  Titulo: ${tarea.titulo}  -  Prioridad: ${tarea.prioridad}</li>`;

    }
};



export { guardarTarea, listarAgenda };

