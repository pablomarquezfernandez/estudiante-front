import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { PrincipalexternoComponent } from './components/principalexterno/principalexterno.component';
import { ActualizarusuarioComponent } from './components/actualizarusuario/actualizarusuario.component';

export const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'externo', component: PrincipalexternoComponent },
    { path: 'editar-usuario/:idUsuario', component: ActualizarusuarioComponent },
];
