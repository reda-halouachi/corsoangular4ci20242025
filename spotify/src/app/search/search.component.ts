import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SpotifyService } from '../spotify.service';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { ISearch } from '../i-search';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
 // Inject di Spotify service
 private spotifyService: SpotifyService = inject(SpotifyService);

 // Definire una proprietà di tipo From control che mi ocnsente di gestire la input in modo avanzato
 artistName: FormControl = new FormControl();

 // Signal che gestisce l'elenco degli artitsti ricevuto da spotify
 artistsList: WritableSignal<ISearch | null> = signal<ISearch | null>(null);

 ngOnInit(): void {
  //valueChanges restituisce un observable, la funzione passata con subscribe viene eseguita
  // ogni volta che viene modificato il valore della input.
  // .pipe mi consente di intercettare la modifica del valore della input e applicare una serie di 
  // elaborazioni passate fra parentesi tonde e separate da virgola
  // Queste elaborazioni verrano eseguite prima che la funzione specifiata da subscribe venga eseguita
  this.artistName.valueChanges.pipe(
    // consente di specificare un intervallo in millisecondi all'interno del quale la modifica 
    // dell'input viene ignorata.
    // A subscribe arrivano solo le modifiche dopo che presentano una pausa di 300 ms.
    debounceTime(300),
    // distinctUntilChanged ignora le modifiche dl valore della input se il valore rispetto alla 
    // elaborazione precedente non è cambiato.
    distinctUntilChanged(),
    //switchMap consente di eseguire la funzione di callBack solo per l'ultimo evento generato dall'observable
    // ovviamente se non erano già state completate, ovvero (spotify ci aveva gia mandato la risposta)
    // switchMap esegue la funzione di callback esattamente come subscribe.
    // Attenzione!!! Il codice della funzione di callBack di switchMap DEVE restituire in ogni caso un observable

    switchMap(nome =>{
      if(nome.length > 0){
        // Nella input c'è scritto qualcosa, mando la richiesta
        return this.spotifyService.searchArtist(nome);
      } else{
        // Non c'è scritto nella input nulla. Cosa facciamo?
        // Come facciamo a restituire dei dati se non gli chiediamo a spotify?
        // Dobbiamo restituire un observable che restituisca un valore o ISearch oppure null
        return of(null);
      }
    })
  )
  .subscribe(dati => {
    console.log(dati);
    this.artistsList.set(dati);
  })
}
 
}
