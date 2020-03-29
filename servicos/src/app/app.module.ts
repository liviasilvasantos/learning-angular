import { LogService } from './shared/log.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CriarCursoModule,
    CursosModule
  ],
  //providers: [CursosService],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
