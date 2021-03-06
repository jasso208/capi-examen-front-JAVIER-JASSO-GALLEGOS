import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http:HttpClient
  ) { }

  obtenerDireccionUsuario():Observable<any>{
    return this.http.get(environment.apiEndPoint + "examen_angular/api_user_domicilio");
  }
}
