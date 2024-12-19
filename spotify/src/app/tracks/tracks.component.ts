import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { ITracks } from '../i-tracks';
import { CoverComponent } from './cover/cover.component';
import { TracksListComponent } from './tracks-list/tracks-list.component';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CoverComponent, TracksListComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {
// Eseguo l'inject del servizio in grado di leggere la url e i parametri presenti
  // Si chiama AtivatedRoute
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spotifyService: SpotifyService = inject(SpotifyService);

  // Signal che gestisce i dati ricevuti da Spotify che devono essere visualizzati
  elencoTracce: WritableSignal<ITracks | null> = signal<ITracks |null>(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametriNellaURL => {
      // Ottengo l'id dell'artista
      let id: string = parametriNellaURL['id'];
      this.spotifyService.getTracks(id).subscribe(dati => {
        this.elencoTracce.set(dati);
      })
    })
  }
}
