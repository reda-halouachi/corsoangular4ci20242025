import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  visualizza: boolean = true;
  pathImmagine: string = '/bici.jpg';
  colori: string[] = ['Red', 'Green', 'Blue'];

  cambiaVisualizza(): void {
    this.visualizza = !this.visualizza;
  }

  aggiungiColore(nomeColore: string): void {
    this.colori.push(nomeColore)
  }

  azzeraColori(): void {
    this.colori = [];
  }
}
