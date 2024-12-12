import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  // Inject di spotifyService
  private spotifyService: SpotifyService = inject(SpotifyService);
  
  // Definire una proprietà di tipo Form control che mi consente di gestire la input in modo avanzato
  artistName: FormControl = new FormControl();

  // Signal 

  ngOnInit(): void {
    // valueChanges restituisce un Observable, la funzione passata con subscribe viene eseguita 
    // ogni volta che viene modificato il valore della input.
    // .pipo mi consente di intercettare la modifica del valore della input e applicare una serie di
    // elaborazioni passate fra parentesi tonde e separate da vigola
    // Quest elaborazioni verranno eseguite prima che la funzione specificata da subscribe venga eseguita
    this.artistName.valueChanges.pipe(
      // consente di specificare un intervallo in millisecondi all'interno del quale la modifica della
      // input viene ignorata.
      // A subscribe arrivano solo le modifiche che presentano un pausa di 300ms.
      debounceTime(300),
      // distinctUntilChanged ignora le modifiche del valore della input se il valore rispetto alla
      // elaborazione precedente non è cambiato
      distinctUntilChanged(),
      // switchMap consente di eseguire la funzione di callback solo per l'ultimo evento generato dall'obervable
      // Ovviamente se non erano già state completate (spotify ci aveva già mandato la risposta)
      // switchMap esegue la funzione di callback esattamente come subscribe
      // ATTENZIONE!!! Il codice della funzione di callback di switchMap DEVE restituire in ogni caso un
      // observable
      switchMap(nome => {
        if (nome.length > 0) {
          // Nella input c'è scritto qualcosa, mando la richiesta
          return this.spotifyService.searchArtist(nome);
        }
        else {
          // Non c'è scritto nella input nulla. Cosa facciamo?
          // Come facciamo a restituire dei dati se non li chiediamo a spotify?
          // Dobbiamo restituire un observable che restituisca un valore o ISearch oppure null
          return of(null);
        }
      }) 
    )
    .subscribe(dati => {
      console.log(dati);
    })
  }


}
