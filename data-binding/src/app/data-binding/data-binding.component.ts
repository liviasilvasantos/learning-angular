import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlDaImagem: string = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string;
  valorSalvo: string;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 2;
  }

  getCurtirCurso() {
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('clicou');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log('digitou = ' +(<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
