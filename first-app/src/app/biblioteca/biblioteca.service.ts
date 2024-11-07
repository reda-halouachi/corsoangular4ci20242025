import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Libro } from './libro';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private _elencoLibri: WritableSignal<Libro[]> = signal<Libro[]>([]);
  elencoLibri: Signal<Libro[]> = this._elencoLibri.asReadonly();

  aggiungiLibro(nuovoLibro: Libro):void {
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
      let prestitoRiuscito: boolean = false;
      this._elencoLibri.update(situazioneCorrente => {
        // se il prestito riesce, modifico il valore di esitoPrestito
        prestitoRiuscito = situazioneCorrente[indice].prestito();
        // Se il prestito è riuscito
        if (prestitoRiuscito) {
          // Restituisco un unovo arraycon il numero di copie del libro aggiornato
          return [...situazioneCorrente];
        }
        else {
          // Se il prestito non è riuscito non modifico nulla, restituisco la situazioneCorrente
          return situazioneCorrente;
        }
      })
      // Il metodo finisce restituendo l'esito del prestito
      return prestitoRiuscito;
    }
    catch {
      // Uffa, qualcosa è andato storto... restituisco false
      return false;
    }
  }

  constructor() { }


}
