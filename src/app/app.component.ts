import { Component, OnInit } from '@angular/core';
import { Plataforma } from './core/interface/Plataforma';
import { PlataformaEvento } from './core/interface/PlataformaEvento';
import { ApiService } from './core/service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eventos';
  plataformas: Plataforma[] = [];
  plataforma: string = '0';
  eventosByPlataforma: PlataformaEvento[] = []

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getPlataformas().subscribe(plataformas => this.plataformas = plataformas);
  }

  getEventos(plataforma: string): void {
    this.api.getEventos(plataforma).subscribe(eventosByPlataforma => this.eventosByPlataforma = eventosByPlataforma);
  }
}
