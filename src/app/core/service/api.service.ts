import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plataforma } from '../interface/Plataforma';
import { PlataformaEvento } from '../interface/PlataformaEvento';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlEndPoint = 'https://bvc-eventos.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getEventos(plataforma: string): Observable<PlataformaEvento[]> {
    return this.http.get<PlataformaEvento[]>(this.urlEndPoint + 'evento/' + plataforma) ;
  }

  getPlataformas(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.urlEndPoint + 'plataforma');
  }
}
