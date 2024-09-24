import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/Usuario';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuariosInterno(): Observable< Usuario[] > {
    return of([
      new Usuario(1, "Pablo", "Márquez", ""),
      new Usuario(2, "María", "Pacheco", ""),
      new Usuario(3, "Francisco", "Márquez", ""),
      new Usuario(4, "Miguel", "Márquez", ""),
    ]);
  }

  getUsuarioExterno(id:number): Promise< Usuario > {
    return axios.get< Usuario >('http://localhost:8080/api/javeriana/estudiante/estudiante/' + id).then(response => response.data);
  }
  getUsuariosExterno(): Promise< Usuario[] > {
    return axios.get< Usuario[] >('http://localhost:8080/api/javeriana/estudiante/estudiante').then(response => response.data);
  }

  insertarUsuariosExterno(usuario:Usuario): Promise< Usuario > {
    return axios.post< Usuario >('http://localhost:8080/api/javeriana/estudiante/estudiante', usuario).then(response => response.data);
  }
  actualizarUsuariosExterno(usuario:Usuario): Promise< Usuario > {
    return axios.put< Usuario >('http://localhost:8080/api/javeriana/estudiante/estudiante', usuario).then(response => response.data);
  }
}
