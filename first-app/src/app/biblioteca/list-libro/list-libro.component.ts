import { Component, effect, inject, signal, Signal, WritableSignal } from '@angular/core';
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
  private bibliotecaService: BibliotecaService = inject(BibliotecaService);
    
  // L'attributo el prende come valore il Signal del mio servizio BibliotecaService
  elencoLibri: Signal<Libro[]> = this.bibliotecaService.elencoLibri;

  indiceModifica: WritableSignal<number> = signal(-1);

  constructor(private bs: BibliotecaService) {
    effect(() => {
      console.log(this.elencoLibri());
    })
  }

  prestito(indice: number): void {
    this.bibliotecaService.prestaLibro(indice);
  }

  restituzione(indice: number): void {
    this.bibliotecaService.restituisciLibro(indice);
  }

  elimina(indice: number): void {
    this.bibliotecaService.eliminaLibro2(indice);
  }

  modifica(indice: number): void {
    this.indiceModifica.set(indice);
  }

  annulla(): void {
    this.indiceModifica.set(-1);
  }

  salva(isbn: string, titolo:string, autore: string, genere: string, anno: string, nrcopie: string): void {
    // Creo un nuovo libro con i nuovi valori
    let libro = new Libro(isbn, titolo, autore, genere, parseInt(anno), parseInt(nrcopie));
    this.bibliotecaService.modificaLibro(this.indiceModifica(), libro);
    this.annulla();
  }

  salvaBiblioteca(): void {
    this.bibliotecaService.salvaLibri();
  }

  caricaBiblioteca(): void {    
    this.bibliotecaService.caricaLibri();
  }
}
