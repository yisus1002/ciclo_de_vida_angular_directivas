import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

 const ROUTES: Routes = [
    { path: 'home', component: HomeComponent }, 
    { path: 'usuario/:id', component: UsuarioComponent, children: USUARIO_ROUTES }, 
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const ROUTING= RouterModule.forRoot(ROUTES);