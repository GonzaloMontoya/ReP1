import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Usuarios } from '../interfaces/usuario.interface';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
