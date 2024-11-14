import { Injectable, Signal, signal, WritableSignal, ɵsetCurrentInjector } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  // Si imposta l'accessibilità al writablesignal che gestisce l'array di Libri per evitare che i componenti
  // che usano il servizio possano modificarlo o usare i metodi set o update in modo non controllato.
  private _elencoLibri: WritableSignal<Libro[]> = signal<Libro[]>([]);
  // Per fare in modo che i componenti che vogliono utilizzare l'elenco dei libri possano avere accesso ai dati
  // si aggiunge un altro signal con accessibilità public di tipo Read-only (Signal) a cui si assegna il valore
  // restituito dal metodo asReadOnly (della class WritableSignal). 
  // Se il writablesignal viene modificato la notifica viene emessa anche dal Read-only signal. 
  elencoLibri: Signal<Libro[]> = this._elencoLibri.asReadonly();

  // Aggiunge un nuovo libro alla biblioteca
  aggiungiLibro(nuovoLibro: Libro): void {
    // Il metodo update accetta come metodo una funzione anonima (espressione lambda) che modifica il valore gestito dal signal.
    // la variabile situazioneCorrente (parametro della funzione anonima di modifica) ha come valore l'array prima dell'aggiunta del nuovo libro.
    // [...situazione corrente crea un NUOVO array con i precedenti valori; , nuovoLibro] aggiunge il nuovo libro al nuovo array.
    // In questo modo il signal può avvisare il componente che il valore gestito è cambiato.
    this._elencoLibri.update(situazioneCorrente => [...situazioneCorrente, nuovoLibro]);
  }

  eliminaLibro(indice: number): boolean {
    // Controllo se indice è corretto: non può essere negativo e deve essere 
    // minore del numero degli elementi dell'array.
    // Posso eliminare il libro in posizione 36 se in biblioteca ci sono 10 libri?
    if (indice >= 0 && indice < this._elencoLibri().length) {
      // Eseguo il metodo update sul signal
      // situazioneAttuale è un array che contiene tutti i libri prima di aggungere il nuovo
      this._elencoLibri.update(situazioneAttuale => {
        // splice elimina dall'array l'elemento in posizione indice (il secondo parametro mi
        // consetirebbe di eliminare con un'unica istruzione più elementi: 2, 3, 4, ecc)
        situazioneAttuale.splice(indice, 1);
        // Aggiorno il signal con un NUOVO (lo si capisce dall'uso delle parentesi quadre) array
        // che contiene TUTTI (dato da ...) gli elementi di situazioneAttuale (ricordarsi che situazioneAttuale
        // non contiene più l'elemento eliminato con splice.)
        return [...situazioneAttuale];
      })
      // Se l'eliminazione è avvenuta correttamente il metodo eliminaLibro restiuisce vero
      return true;
    }
    else {
      // Se l'indice era scorretto restituisco false
      return false;
    }
  }
  eliminaLibro2(indice: number): boolean {
    try {
      this._elencoLibri.update(situazioneAttuale => {
        situazioneAttuale.splice(indice, 1);
        return [...situazioneAttuale];
      })
      return true;
    }
    catch {
      return false;
    }
  }

  prestaLibro(indice: number): boolean {
    try {
      // Il metodo prestito della classe Libro restituisce un boolean con l'esito dell'operazione
      // ricordo: se il numero di copie è uguale a 0 non si puòl prestare
      // Prima di provare a eseguire il prestito imposto a false l'esito     
      this._elencoLibri.update(situazioneCorrente => {
        // se il prestito riesce, modifico il valore di esitoPrestito       
        situazioneCorrente[indice].prestito();
        // Se vengono eseguite le istruzioni successiva è tutto OK
        // Restituisco un unovo arraycon il numero di copie del libro aggiornato
        return [...situazioneCorrente];
      })
      // Il metodo finisce restituendo l'esito del prestito
      return true;
    }
    catch {
      // Uffa, qualcosa è andato storto... restituisco false     
      return false;
    }
  }

  restituisciLibro(indice: number) {
    this._elencoLibri.update(current => {
      try {
        current[indice].restituzione();
        return [...current];
      }
      catch {
        return current;
      }
    })
  }

  constructor() { }

}
