import { Component } from '@angular/core';
import { Studente } from './studente';

@Component({
  selector: 'app-studenti',
  standalone: true,
  imports: [],
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.css'
})
export class StudentiComponent {
  studenti: Studente[] = [];

  aggiungi(id: HTMLInputElement, nome: HTMLInputElement, cognome: HTMLInputElement, classe: HTMLInputElement): void {
    // Creo una nuova istanza della classe Studente
    // id, nome, cognome, classe sono oggetti di tipo HTMLInputElement: rappresentano il tag input presente nel
    // template HTML (vedi #id, ....)
    let studente = new Studente(parseInt(id.value), nome.value, cognome.value);

    // Se l'utente ha compiltao la input classe, uso il setter classe della classe studente.
    // NB: attencione a come si usano i setter e i getter in typescript
    // nomeoggetto.nomesetter = valore_da_assegnare
    if (classe.value != '') {
      studente.classe = classe.value;
    }
    // Aggiungo il nuovo studente all'array che gestisce l'elenco di studenti.
    this.studenti.push(studente);

    // Azzero la proprietà value degli input: sulla pagina web gli input torneranno vuoti
    id.value = '';
    nome.value = '';
    cognome.value = '';
    classe.value = '';

    // Visualizzare nella console l'elenco degli studenti
    console.log(this.studenti);

  }

  aggiungiVoto(i: number, voto: HTMLInputElement): void {
    this.studenti[i].aggiungiVoto(parseInt(voto.value));
    voto.value = '';
  }
}
