import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-perfiles',
  templateUrl: './admin-perfiles.component.html',
  styleUrls: ['./admin-perfiles.component.scss']
})
export class AdminPerfilesComponent implements OnInit {

  formPerfil: any;
  listaPerfiles: any[] = [];
  idPerfilActual = '';
  modoCrud = 'adicion';

  constructor(
    private fb: FormBuilder,
    private servicioBackend: BackendService
  ) {
    this.formPerfil = this.fb.group(
      {
        perfil: ['', Validators.required],
        nivel: ['', Validators.required]
      }
    );

    this.obtenerPerfiles();
  }

  ngOnInit(): void {
  }

  obtenerPerfiles(): void {

    this.servicioBackend.getRequest('perfils').subscribe(
      {
        next: (data) => {
          // 

          this.listaPerfiles = data;
          console.log(data);
        },
        error: (e) => {
          console.log('Error');
        },
        complete: () => {
          console.log('Completo');
        }
      }
    )
  }

  iniciarAdicion(): void {
    this.modoCrud = "adicion";
    //this.formUsuario.reset();
  }

  crearPerfiles(): void {
    const perfilNuevo = this.formPerfil.getRawValue();
    //usuarioNuevo['clave'] = 'xxx';
    alert(this.formPerfil.getRawValue().toString());
    this.servicioBackend.postRequest('perfils', JSON.stringify(perfilNuevo)).subscribe(
      {
        next: (data) => {
          this.listaPerfiles.push(data);
          /* Swal.fire({
            title: 'Felicidades',
            //type: 'success',
            icon: 'success',
            confirmButtonText: 'OK'            
          }); */
          Swal.fire('Felicidades', 'Has creado un nuevo perfil', 'success');
          //this.formUsuario.reset();
          console.log(data);
        },
        error: (e) => {
          Swal.fire('Advertencia', 'Hay un error en el proceso', 'success');
          console.log('Error');
          
        },
        complete: () => {
          Swal.fire('Advertencia', 'Completo el proceso', 'success');
          console.log('Completo');
        }
      }
    );
  }

  iniciarEdicion(perfil: any): void {
    this.formPerfil.patchValue(perfil);
    //alert('iniciarEdicion ejecutado');
    this.idPerfilActual = perfil.id;
    this.modoCrud = 'edicion';
  }

  editar(): void {
    const newPerfil = this.formPerfil.getRawValue();
    this.servicioBackend.patchRequest('perfils', this.idPerfilActual, newPerfil).subscribe(
      {
        next: (data) => {
          this.obtenerPerfiles();
          Swal.fire('Felicidades', 'Has editado al perfil', 'success');

          console.log(data);
        },
        error: (e) => {
          console.log('Error');
        },
        complete: () => {
          console.log('Completo');
        }
      }
    );
  }

  eliminarPerfil(perfil: any): void {
    this.servicioBackend.deleteRequest('perfils', perfil.id).subscribe(
      {
        next: (data) => {
          this.obtenerPerfiles();
          Swal.fire('Advertencia', 'Has eliminado al perfil ' + perfil.perfil, 'success');

          console.log(data);
        },
        error: (e) => {
          console.log('Error');
        },
        complete: () => {
          console.log('Completo');
        }
      }
    );
  }

}
