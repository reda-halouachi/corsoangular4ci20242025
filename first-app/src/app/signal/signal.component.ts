import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  // Un signal è una funzione wrapper che incorpora un elemento (dato) e ne gestisce
  // gli avvisi al browser di avvenuta modifica.
  // Quando un componente che in typescript contiene un signal che è stato modificato
  // il browser lo ridisegna con il nuovo valore.
  // Adesso dovremo usare dei metodi di signal per assegnare un valore o modificare 
  // il valore del dato gestito

  // signal di un valore numerico

  numeroGestitoConSignal = signal(0);

  // Tutti i tipi di signal sono generics, riescono cioè a gestire qualsiasi tipo di valore:
  // numeri, stringhe, array, oggetti, ecc...

  // Signal è in sola lettura: una volta impostato non può più essere cambiato.
  // computed: accetta come parametro la funzione di callback che dice al signal
  // come calcolare il valore da gestire (ricordo che si tratta sempre di funzione wrapper)
  doppioCalcolato: Signal<number> = computed(() => this.numeroGestitoConSignal() * 2)

  // WritableSignal: aggiunge a Signal (sola lettura) i metodi set, update e asReadonly
  altroSignal: WritableSignal<string> = signal('Ciao');

  incrementa():void {
    // Al metodo update viene passata la funzione di callback che spiega come modificare 
    // il valore gestito dal signal. vecchioValore viene inizializzato con il valore corrente
    // del signal prima della modifica.
    this.numeroGestitoConSignal.update(vecchioValore => vecchioValore + 1);
  }

  azzera(): void {
    // Set imposta un nuovo valore per il signal.
    this.numeroGestitoConSignal.set(0);
    
  }

  cambiaSaluto(): void {
    this.altroSignal.set('Buongiorno.');
  }

  // I metodi set e update producono il ridisegno del solo componente nel quale si trova il signal
  // interessato dai metodi.
}
