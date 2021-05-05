import { Component, OnInit } from '@angular/core';
import { DireccionUsuario } from '../models/direccion';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public direccion:Array<DireccionUsuario> = [];
  constructor(
      public usuarioService:UsuarioService
    ) { }

  ngOnInit(): void {

    this.usuarioService.obtenerDireccionUsuario()
    .subscribe(
      data =>{
        this.direccion = JSON.parse(data);
        console.log(this.direccion);

      }
    );

  }



}
