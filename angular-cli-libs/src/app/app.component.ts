import { Component } from '@angular/core';

// importa todas as funções de lodash
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cli-libs';

  list = _.map([1, 2, 3], (n: number) => `# ${n}`);
}
