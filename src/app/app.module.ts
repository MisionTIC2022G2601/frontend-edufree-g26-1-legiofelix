import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProgramasEnOfertaComponent } from './programas-en-oferta/programas-en-oferta.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { AdminPerfilesComponent } from './admin-perfiles/admin-perfiles.component';
import { AdminGruposComponent } from './admin-grupos/admin-grupos.component';
import { AdminUsuariosPorGrupoComponent } from './admin-usuarios-por-grupo/admin-usuarios-por-grupo.component';
import { AdminAsignaturasComponent } from './admin-asignaturas/admin-asignaturas.component';
import { AdminProgramasAcademicosComponent } from './admin-programas-academicos/admin-programas-academicos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramasEnOfertaComponent,
    AdminUsuariosComponent,
    AdminPerfilesComponent,
    AdminGruposComponent,
    AdminUsuariosPorGrupoComponent,
    AdminAsignaturasComponent,
    AdminProgramasAcademicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Necesario para ngModel
    FormsModule,
    ReactiveFormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
