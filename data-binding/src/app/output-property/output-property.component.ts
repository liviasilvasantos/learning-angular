import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Output() mudouValor = new  EventEmitter();

  @Input() valor: number = 0;

  @ViewChild('campoInput',{static:false}) campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.campoValorInput.nativeElement.value++;
    // this.valor++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    // this.valor--;
    this.mudouValor.emit({novoValor:this.valor});
  }
}
