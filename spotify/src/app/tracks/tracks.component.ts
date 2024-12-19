import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { IAlbums } from '../i-albums';
import { CoverComponent } from './cover/cover.component';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CoverComponent, TracksComponent],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {

  // Esegue l'inject del servizio in grado di leggere la url e i parametri presenti
    // Si chiama activatedRoute
    private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private spotifyService: SpotifyService = inject(SpotifyService);
  
    //Signal che gestisce i dati ricevuti da spoytify che devono essere visualizzati
    elencoTracce: WritableSignal<IAlbums | null> = signal<IAlbums | null>(null);
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(parametriNellaURL => {
        // Ottengo l'id dell'artista
        let id: string = parametriNellaURL['id'];
        this.spotifyService.getAlbums(id).subscribe(dati =>{
          this.elencoTracce.set(dati);
        })
      })
    }
}
