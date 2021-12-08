import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  formUsuario: any;
  listaUsuarios: any[] = [];
  idUsuarioActual = '';
  modoCrud = 'adicion';

  constructor(
    private fb: FormBuilder,
    private servicioBackend: BackendService
  ) {
    this.formUsuario = this.fb.group(
      {
        identificacion: ['', Validators.required],
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        movil: ['', Validators.required],
        clave: ['', Validators.required],
        perfilId: ['', Validators.required]
      }
    );

    this.obtenerUsuarios();
  }

  ngOnInit(): void {
  }

  obtenerUsuarios(): void {

    this.servicioBackend.getRequest('usuarios').subscribe(
      {
        next: (data) => {
          // 

          this.listaUsuarios = data;
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

  crearUsuarios(): void {
    const usuarioNuevo = this.formUsuario.getRawValue();
    //usuarioNuevo['clave'] = 'xxx';
    this.servicioBackend.postRequest('usuarios', JSON.stringify(usuarioNuevo)).subscribe(
      {
        next: (data) => {
          this.listaUsuarios.push(data);
          /* Swal.fire({
            title: 'Felicidades',
            //type: 'success',
            icon: 'success',
            confirmButtonText: 'OK'            
          }); */
          Swal.fire('Felicidades', 'Has creado un nuevo usuario', 'success');
          //this.formUsuario.reset();
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

  iniciarEdicion(usuario: any): void {
    this.formUsuario.patchValue(usuario);
    //alert('iniciarEdicion ejecutado');
    this.idUsuarioActual = usuario.id;
    this.modoCrud = 'edicion';
  }

  editar(): void {
    const newUser = this.formUsuario.getRawValue();
    this.servicioBackend.patchRequest('usuarios', this.idUsuarioActual, newUser).subscribe(
      {
        next: (data) => {
          this.obtenerUsuarios();
          Swal.fire('Felicidades', 'Has editado al usuario', 'success');

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
  
  eliminarUsuario(usuario: any): void {
    this.servicioBackend.deleteRequest('usuarios', usuario.id).subscribe(
      {
        next: (data) => {
          this.obtenerUsuarios();
          Swal.fire('Advertencia', 'Has eliminado al usuario ' + usuario.nombres + ' ' + usuario.apellidos, 'success');

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
