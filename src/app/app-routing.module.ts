import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './views/contato/contato.component';
import { HomeComponent } from './views/home/home.component';

// As rotar que terão no projeto:
const routes: Routes = [
  {path:"Home", component:HomeComponent},
  {path:"contato", component: ContatoComponent}
];

// O NgModule vai declarar
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // O conjunto de componentes, diretivas e pipes declarados neste NgModule que podem ser usados ​​no template de qualquer componente que faça parte de um NgModule que importe este NgModule. As declarações exportadas são a API pública do módulo.
  exports: [RouterModule]
})
export class AppRoutingModule { }
