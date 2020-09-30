import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UsuariosCrudComponent } from './views/usuarios/usuarios-crud/usuarios-crud.component';
import { UsuariosInserirComponent} from './components/template/usuarios/usuarios-inserir/usuarios-inserir.component';
import { UsuariosAlterarComponent } from './components/template/usuarios/usuarios-alterar/usuarios-alterar.component';
import { UsuariosDeletarComponent } from './components/template/usuarios/usuarios-deletar/usuarios-deletar.component';
import { UsuariosListarComponent } from './components/template/usuarios/usuarios-listar/usuarios-listar.component';


const routes: Routes = [
 {
    path:"",
    component: HomeComponent
 },
 {
  path:"usuarios",
  component: UsuariosCrudComponent
},
{
  path:"usuarios",
  component: UsuariosCrudComponent
},
{
  path:"usuarios/inserir",
  component: UsuariosInserirComponent
},
{
  path: "usuarios/alterar/:id",
  component: UsuariosAlterarComponent
},
{
  path: "usuarios/deletar/:id",
  component: UsuariosDeletarComponent
},
{
  path: "usuarios/listar",
  component: UsuariosListarComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
