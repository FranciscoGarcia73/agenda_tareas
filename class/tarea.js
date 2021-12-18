export default class Tarea {

    constructor(pIdTarea, pTitulo, pPrioridad) {
        this.idTarea = pIdTarea;
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
    };

    mostrar() {
        return `[Tarea] - idTarea: ${this.idTarea}. Titulo: ${this.titulo}. Prioridad: ${this.prioridad}`;
    };

};