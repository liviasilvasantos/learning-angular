import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular', 'Java', 'Phonegap'];

    constructor() {
        console.log('instanciando CursosService');
    }

    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);
    }
}