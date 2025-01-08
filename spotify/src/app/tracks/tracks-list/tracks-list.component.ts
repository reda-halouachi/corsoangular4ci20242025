import { Component, input, InputSignal } from '@angular/core';
import { Tracks } from '../../i-tracks';

@Component({
  selector: 'app-tracks-list',
  standalone: true,
  imports: [],
  templateUrl: './tracks-list.component.html',
  styleUrl: './tracks-list.component.css'
})
export class TracksListComponent {
  tracks: InputSignal<Tracks | undefined> = input.required<Tracks | undefined>();
}
