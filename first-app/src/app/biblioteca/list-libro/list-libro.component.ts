import { Component, effect, inject, Signal } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-list-libro',
  standalone: true,
  imports: [],
  templateUrl: './list-libro.component.html',
  styleUrl: './list-libro.component.css'
})
export class ListLibroComponent {

  // Dependency injection
  private bs: BibliotecaService = inject(BibliotecaService);
  
  // L'attributo el prende come valore il Signal del mio servizio BibliotecaService
  el: Signal<Libro[]> = this.bs.elencoLibri;

  constructor() {
    effect(() => {
      console.log(this.el());
    })
  }

}
