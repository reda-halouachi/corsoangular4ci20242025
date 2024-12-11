import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 // Inietto il servizio Spotify nella componente
  private SpotifyService: SpotifyService = inject(SpotifyService);

  // Nel template HTML possono essere usati solo mentodi e attributi edlla classe che definisce il componente
  tokenOk : Signal<boolean> = this.SpotifyService.tokenOK;

}
