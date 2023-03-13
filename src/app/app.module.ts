// Modules são 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeaderComponent } from './views/header/header.component';



@NgModule({
  // O conjunto de componentes, diretivas e canais ( declaráveis ) que pertencem a este módulo.
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    HeaderComponent
  ],
  // O conjunto de NgModules cujos declaráveis ​​exportados estão disponíveis para modelos neste módulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // O conjunto de objetos injetáveis ​​que estão disponíveis no injetor deste módulo.
  providers: [],
  // O conjunto de componentes que são inicializados quando este módulo é inicializado. Os componentes listados aqui são adicionados automaticamente ao entryComponents.
  bootstrap: [AppComponent]
})
export class AppModule { }
