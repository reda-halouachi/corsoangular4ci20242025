import { Component, input, InputSignal } from '@angular/core';
import { Item } from '../i-albums';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {
  album: InputSignal<Item> = input.required();

  get artists(): string {
    return this.album().artists.map(artist => artist.name).join(', ');
  }
}
