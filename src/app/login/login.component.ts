import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import { BackendService } from '../backend.service';

//Interfaces
interface usuario {
  email: String;
  clave: String;

}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: any;

  titulo = "Login";

  constructor(
    private fb: FormBuilder,
    private servicioBackend: BackendService
  
  ) {

    this.formLogin = this.fb.group(
      {
        email: ['', Validators.required],
        clave: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void { }

  autenticar(): void {
    
    const contraseniaEncriptada = Md5.hashStr(this.formLogin.controls.clave.value);
    const credenciales = this.formLogin.getRawValue();
    credenciales.clave = contraseniaEncriptada;
    this.servicioBackend.autenticar(JSON.stringify(credenciales)).subscribe(
      {
        next: (data) => {
          // 
          if (data && data.length > 0) {
            alert('Sesión iniciada: las credenciales son correctas');
          } else {
            alert('Lo sentimos: las credenciales son incorrectas');
          }

          console.log(data);  
        },
        error: (e) => {
          console.log('¡Uy! Un error');
        },
        complete: () => {
          console.log('Se completó');
        }
      }
    );
  }

}
