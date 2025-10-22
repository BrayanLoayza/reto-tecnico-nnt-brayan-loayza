import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiPersonasService } from './services/api-personas.service';
import { Persona } from './models/persona.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'reto-tecnico-frontend-angular';

  persona$!: Observable<Persona[]>;
  cargando = false;

  constructor(private apiPersonasService: ApiPersonasService) {}

  /* llamamos a la funcion al iniciar el componente */
  ngOnInit() {
    this.cargarPersonas();
  }

  /* hacemos el request de personas */

  cargarPersonas() {
    this.persona$ = this.apiPersonasService.getPersonas();
  }

  
}
