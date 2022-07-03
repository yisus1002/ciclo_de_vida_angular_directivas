import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CsssComponent } from './components/csss/csss.component';
import { ClasesComponent } from './components/clases/clases.component';
import { RealtadoDirective } from './directives/realtado.directive';
import { NgSwhitchComponent } from './components/ng-swhitch/ng-swhitch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CsssComponent,
    ClasesComponent,
    RealtadoDirective,
    NgSwhitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
