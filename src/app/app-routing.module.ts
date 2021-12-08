import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAsignaturasComponent } from './admin-asignaturas/admin-asignaturas.component';
import { AdminGruposComponent } from './admin-grupos/admin-grupos.component';
import { AdminPerfilesComponent } from './admin-perfiles/admin-perfiles.component';
import { AdminProgramasAcademicosComponent } from './admin-programas-academicos/admin-programas-academicos.component';
import { AdminUsuariosPorGrupoComponent } from './admin-usuarios-por-grupo/admin-usuarios-por-grupo.component';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios.component';
import { LoginComponent } from './login/login.component';
import { ProgramasEnOfertaComponent } from './programas-en-oferta/programas-en-oferta.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'programas-en-oferta',
    component: ProgramasEnOfertaComponent
  },
  {
    path: 'admin-usuarios',
    component: AdminUsuariosComponent
  },
  {
    path: 'admin-perfiles',
    component: AdminPerfilesComponent
  },
  {
    path: 'admin-grupos',
    component: AdminGruposComponent
  },
  {
    path: 'admin-usuarios-por-grupo',
    component: AdminUsuariosPorGrupoComponent
  },
  {
    path: 'admin-asignaturas',
    component: AdminAsignaturasComponent
  },
  {
    path: 'admin-programas-academicos',
    component: AdminProgramasAcademicosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
