import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';

  valor: number = 5;
  isDestruirCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.isDestruirCiclo = true;
  }
}
