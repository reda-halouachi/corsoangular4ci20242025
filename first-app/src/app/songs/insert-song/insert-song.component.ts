import { Component, model, ModelSignal, WritableSignal } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-insert-song',
  standalone: true,
  imports: [],
  templateUrl: './insert-song.component.html',
  styleUrl: './insert-song.component.css'
})
export class InsertSongComponent {
  // model è un signal che realizza un two-way binding con il componente parent.
  // .required sta a significare che il signal che gestisce l'array di song del
  // componente parent (Songs) deve essere speficato quando si aggiunge al DOM
  // questo componente
  parentSongs: ModelSignal<Song[]> = model.required<Song[]>();

  add(id: HTMLInputElement, title:HTMLInputElement, artist:HTMLInputElement, duration:HTMLInputElement, 
      genre:HTMLInputElement, rating:HTMLInputElement): void {
    
    // Creo una nuova istanza della classe Song
    // parseInt mi consente di trasformare una stringa in un numero
    let newSong = new Song(parseInt(id.value), title.value, artist.value, parseInt(duration.value),
                           genre.value, parseInt(rating.value));
    
    // Aggiungo la nuova Song all'array.
    // Attenzione!!! L'array di Song è gestito con un Signal, quindi devo usare il metodo update
    this.parentSongs.update(current => [...current, newSong]);

    // Azzero il valore contenuto nelle input
    id.value = '';
    title.value = '';
    artist.value = '';
    duration.value = '';
    genre.value = '';
    rating.value = '';
  }
}
