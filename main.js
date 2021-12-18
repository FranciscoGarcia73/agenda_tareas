import { guardarTarea, listarAgenda } from './function/function.js';
import { filtrarPrioridad, borrarId, buscarTexto } from './function/function2.js';

const boton = document.getElementById('boton');
const botonList = document.getElementById('botonList');
const botonListPrioridad = document.getElementById('botonListPrioridad');
const botonBorrar = document.getElementById('botonBorrar');
const botonBuscarTexto = document.getElementById('botonBuscarTexto');

boton.addEventListener('click', guardarTarea);
botonList.addEventListener('click', listarAgenda());
botonListPrioridad.addEventListener('click', filtrarPrioridad);
botonBorrar.addEventListener('click', borrarId);
botonBuscarTexto.addEventListener('click', buscarTexto);



