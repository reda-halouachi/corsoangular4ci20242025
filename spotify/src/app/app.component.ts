import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'spotify';
  // Dependency injection
  private spotifyService: SpotifyService = inject(SpotifyService);
  
  ngOnInit(): void {
    // Codice che viene eseguito alla creazione del componente.
    // Essendo il componente princiaple, significa che il codice che segue verrà eseguito all'avvio
    // dell'applicazione, prima che venga eseguito il render della pagina
    this.spotifyService.getToken();

  }


}
