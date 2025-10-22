import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonasService {


  /* leemos la url de la api provniente del backend */
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

   /* hacemos el request de */
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }
}
