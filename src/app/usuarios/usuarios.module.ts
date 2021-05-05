import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';



@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TablaUsuariosComponent
  ]
})
export class UsuariosModule { }
