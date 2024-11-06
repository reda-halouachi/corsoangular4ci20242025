import { Component, effect, signal, WritableSignal } from '@angular/core';
import { Song } from './song';
import { InsertSongComponent } from './insert-song/insert-song.component';
import { SongsTableComponent } from './songs-table/songs-table.component';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [InsertSongComponent, SongsTableComponent],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  // Nel componente parent dichiaro un signal writable per gestire l'array di song 
  // Da visualizzare/modificare nei componenti child:
  // - insert-song
  // - song-table
  songs: WritableSignal<Song[]> = signal([]);

  constructor() {
    // Creo un avviso se viene modificato songs
    effect(() => {
      console.log(this.songs());
    })
  }


}
