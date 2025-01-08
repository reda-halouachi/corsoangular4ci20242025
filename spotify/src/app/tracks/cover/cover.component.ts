import { Component, input, InputSignal } from '@angular/core';
import { ICover } from '../../i-tracks';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [],
  templateUrl: './cover.component.html',
  styleUrl: './cover.component.css'
})
export class CoverComponent {
  coverInfo: InputSignal<ICover | undefined> = input.required<ICover | undefined>();
}
