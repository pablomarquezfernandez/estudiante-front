import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { InsertarusuarioComponent } from "../insertarusuario/insertarusuario.component";

@Component({
  selector: 'app-principalexterno',
  standalone: true,
  imports: [CommonModule, InsertarusuarioComponent],
  templateUrl: './principalexterno.component.html',
  styleUrl: './principalexterno.component.css'
})
export class PrincipalexternoComponent {

  datosModelosService: Usuario[] = [];

  constructor(
    private usuariosService: UsuarioService,
  ){
  }

  ngOnInit(): void {
    this.cargarPipolService();
  }

  cargarPipolService(){
    // Externo
    this.usuariosService.getUsuariosExterno().then((post) => {
      this.datosModelosService = post;
    }).catch((error) => {
      console.error(error);
    });
    
  }
}
