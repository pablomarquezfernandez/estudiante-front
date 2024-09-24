import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-replicausuario',
  standalone: true,
  imports: [],
  templateUrl: './replicausuario.component.html',
  styleUrl: './replicausuario.component.css'
})
export class ReplicausuarioComponent {

  @Input() usuario: Usuario | undefined;
}
