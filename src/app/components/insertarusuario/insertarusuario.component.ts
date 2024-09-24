import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insertarusuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insertarusuario.component.html',
  styleUrl: './insertarusuario.component.css'
})
export class InsertarusuarioComponent {

  usuario: Usuario;
  @Output() actualizarUsuarios = new EventEmitter(); 

  constructor(
    private usuarioService: UsuarioService,
  ){
    this.usuario = new Usuario();
  }
  insertarUsuario(event: Event){
    event.preventDefault();
    this.usuarioService.insertarUsuariosExterno(this.usuario).then((post) => {
      this.actualizarUsuarios.emit();
      this.usuario = new Usuario();
    }).catch((error) => {
      console.error(error);
    });
  }
}
