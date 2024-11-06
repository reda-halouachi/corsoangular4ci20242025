import { Component, input, InputSignal } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-songs-table',
  standalone: true,
  imports: [],
  templateUrl: './songs-table.component.html',
  styleUrl: './songs-table.component.css'
})
export class SongsTableComponent {
  parentSongs: InputSignal<Song[]> = input.required<Song[]>()
}
