import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReplicausuarioComponent } from "../replicausuario/replicausuario.component";

@Component({
  selector: 'app-actualizarusuario',
  standalone: true,
  imports: [FormsModule, ReplicausuarioComponent],
  templateUrl: './actualizarusuario.component.html',
  styleUrl: './actualizarusuario.component.css'
})
export class ActualizarusuarioComponent {

  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ){
    this.usuario = new Usuario();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      var idUsaurio = params['idUsuario'];
      this.usuarioService.getUsuarioExterno(idUsaurio).then((post) => {
        this.usuario = post;
      }).catch((error) => {
        console.error(error);
      });
      
    });

  }
  actualizarUsuario(event: Event){
    event.preventDefault();
    this.usuarioService.actualizarUsuariosExterno(this.usuario).then((post) => {
      window.location.href = '/externo';
    }).catch((error) => {
      console.error(error);
    });
  }
}
