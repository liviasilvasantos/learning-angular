import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomeDoPortal: string;
  cursos: string[];

  constructor(public cursosService: CursosService) { 
    this.nomeDoPortal = 'http://loiane.training';

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
