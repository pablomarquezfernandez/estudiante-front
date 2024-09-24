import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./components/principal/principal.component";
import { PrincipalserviciosComponent } from "./components/principalservicios/principalservicios.component";
import { PrincipalexternoComponent } from "./components/principalexterno/principalexterno.component";
import { InsertarusuarioComponent } from "./components/insertarusuario/insertarusuario.component";
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalComponent, PrincipalserviciosComponent, PrincipalexternoComponent, InsertarusuarioComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '324ulksaj lsaddkj lsa';
}
