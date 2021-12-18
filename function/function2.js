import { listarAgenda } from './function.js';

const ul = document.getElementById('listadoAgendaPri');
const ul2 = document.getElementById('listadoAgendaTexto');
const encabezadoTexto = document.getElementById('encabezadoTexto');
const encabezadoPrioridad = document.getElementById('encabezadoPrioridad');
let agenda;

function filtrarPrioridad(event) {
    event.preventDefault();
    const pPrioridad = document.getElementById('pPrioridad').value;
    ul.innerHTML = '';
    encabezadoPrioridad.innerHTML = `Listado tareas con prioridad ` + pPrioridad;
    agenda = JSON.parse(localStorage.getItem('agenda'));
    const agendaFilt = agenda.filter(tarea => (tarea.prioridad.toLowerCase() === pPrioridad.toLowerCase()));
    for (let tarea of agendaFilt) {
        ul.innerHTML += `<li> idTarea: ${tarea.idTarea}  -  Titulo: ${tarea.titulo}  -  Prioridad: ${tarea.prioridad}</li>`;
    };
};


function borrarId(event) {
    event.preventDefault();
    const idTarea = document.getElementById('borrarId').value;
    agenda = JSON.parse(localStorage.getItem('agenda'));
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].idTarea === parseInt(idTarea)) {
            agenda.splice(i, 1);
            localStorage.setItem('agenda', JSON.stringify(agenda));
            alert('Elemento borrado');
            listarAgenda();
        };
    };
};


function buscarTexto(event) {
    event.preventDefault();
    let buscarTexto = document.getElementById('buscarTexto').value.toString().toLowerCase();
    agenda = JSON.parse(localStorage.getItem('agenda'));
    ul2.innerHTML = '';
    encabezadoTexto.innerHTML = `Listado tareas que contienen el texto ` + buscarTexto;
    for (let tarea of agenda) {
        for (let clave in tarea) {
            if (tarea[clave].toString().toLowerCase().includes(buscarTexto)) {
                ul2.innerHTML += `<li> idTarea: ${tarea.idTarea}  -  Titulo: ${tarea.titulo}  -  Prioridad: ${tarea.prioridad}</li>`;
            };
        };
    };
};

export { filtrarPrioridad, borrarId, buscarTexto };
