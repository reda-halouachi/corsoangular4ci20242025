import { Component, inject } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service';
import { Libro } from '../libro';

@Component({
  selector: 'app-insert-libro',
  standalone: true,
  imports: [],
  templateUrl: './insert-libro.component.html',
  styleUrl: './insert-libro.component.css'
})
export class InsertLibroComponent {

  // Metodo 1: usando il costruttore
  // Dependency injection: l'istanza del servizio BibliotecaService creata (providedIn: root)
  // a livello di applicazione viene resa disponibile per il componente con il nome bs
  constructor(private bs1: BibliotecaService) {}

  // Metodo 2: usando la funzione inject
  private bs2: BibliotecaService = inject(BibliotecaService);

  aggiungiLibro(isbn: string, titolo: string, autore: string, genere: string, anno: string, nrcopie: string): void {
    let nuovoLibro = new Libro(isbn, titolo, autore, genere, parseInt(anno), parseInt(nrcopie));
    this.bs2.aggiungiLibro(nuovoLibro);
  }

}
