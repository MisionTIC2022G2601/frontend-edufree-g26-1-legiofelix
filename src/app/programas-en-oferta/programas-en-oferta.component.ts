import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

interface Programa {
  programa: String,
  registroICFES: String,
  duracion: Number
}

@Component({
  selector: 'app-programas-en-oferta',
  templateUrl: './programas-en-oferta.component.html',
  styleUrls: ['./programas-en-oferta.component.scss']
})
export class ProgramasEnOfertaComponent implements OnInit {

  listaProgramas : Programa [] = [];

  constructor(private servicioBackend: BackendService) {
    this.servicioBackend.getRequest('programa-academicos').subscribe(

      {
        next: (data) => {console.log('Gracias, ya tengo los datos'); this.listaProgramas = data},
        error: (e) => {console.log('¡Uy! Un error');},
        complete: () => {console.log('Se completó');}
      }

    );
  }

  ngOnInit(): void { }

}
