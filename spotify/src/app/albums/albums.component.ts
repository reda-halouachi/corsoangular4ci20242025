import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { IAlbums } from '../i-albums';
import { AlbumCardComponent } from '../album-card/album-card.component';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [AlbumCardComponent],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  // Eseguo l'inject del servizio in grado di leggere la url e i parametri presenti
  // Si chiama AtivatedRoute
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private spotifyService: SpotifyService = inject(SpotifyService);

  // Signal che gestisce i dati ricevuti da Spotify che devono essere visualizzati
  elencoAlbum: WritableSignal<IAlbums | null> = signal<IAlbums |null>(null);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametriNellaURL => {
      // Ottengo l'id dell'artista
      let id: string = parametriNellaURL['id'];
      this.spotifyService.getAlbums(id).subscribe(dati => {
        this.elencoAlbum.set(dati);
      })
    })
  }
}
