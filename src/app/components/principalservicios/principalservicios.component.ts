import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principalservicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principalservicios.component.html',
  styleUrl: './principalservicios.component.css'
})
export class PrincipalserviciosComponent {
  datosModelosService: Usuario[] = [];

  constructor(
    private usuariosService: UsuarioService,
    
  ){
  }

  ngOnInit(): void {
    this.cargarPipolService();
  }

  cargarPipolService(){
    // Interno
    this.usuariosService.getUsuariosInterno().subscribe( response =>{
      this.datosModelosService  = response;
    } );
  }
}
