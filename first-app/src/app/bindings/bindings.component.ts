import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  standalone: true,
  // Devo importare i moduli con le funzionalità avanzate che mi servono
  // FormsModule contiene two way binding
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  numero: number = 5;
  nomeImmagine: string = "/bici.jpg";
  colore: string = 'red';
  className = 'azzurro';
  colori: string[] = ['red', 'green', 'blue'];
  indiceColore: number = 0;
  nome: string = 'Andrea';

  // Metodo per event binding

  incrementa(): void {
    this.numero++;
  }

  cambiaNome(): void {
    this.nome = 'Anita';
  }
}
