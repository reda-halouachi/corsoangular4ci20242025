import { Component, input, InputSignal } from '@angular/core';
import { Item } from '../i-albums';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {
  album: InputSignal<Item> = input.required();
}
