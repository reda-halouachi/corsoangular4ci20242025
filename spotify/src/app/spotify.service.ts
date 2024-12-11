import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { IToken } from './i-token';
import { interval, Observable } from 'rxjs';
import { ISearch } from './i-search';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // credenziali per accedere a Spotify API
  private clientId: string = '8b39e56d4dad491aaa626b87f7260358';
  private clientSecret: string = '4f3e9a298b084c35846c5ddf5fc3927e';

  private tokenURL: string = 'https://accounts.spotify.com/api/token';
  private searchURL: string = 'https://api.spotify.com/v1/search?q=';

  private token!: IToken;
  private _tokenOK: WritableSignal<boolean> = signal(false);
  tokenOK: Signal<boolean> = this._tokenOK.asReadonly();

  // Attraverso dependency injection aggiungo il client http al mio servizio
  private httpClient: HttpClient = inject(HttpClient);

  constructor() { }

  // La funzione getToken invia una richiesta a Spotify per ottenere il token bearer e lo memorizza
  getToken(): void {
    // Creo un oggetto per la Header del messaggio HTTP
    const header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    // Creo l'oggeto per il body
    const body: HttpParams = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret)
    
    this.httpClient.post<IToken>(this.tokenURL, body.toString(), {headers: header})
    .subscribe((dati: IToken) => {
      // Funzione di callback da eseguire quando l'observable mi ha inviato i dati, nel nostro
      // caso quando Spotify ci manda l'access token
      this.token = dati;
      this._tokenOK.set(true);
      interval(this.token.expires_in * 1000).subscribe(() => {
        this._tokenOK.set(false);
        this.httpClient.post<IToken>(this.tokenURL, body.toString(), {headers: header})
        .subscribe((dati: IToken) => {
          this.token = dati;
          this._tokenOK.set(true);
        })
      })
    })    
  }

  searchArtist(name: string): Observable<ISearch> {
    const headers: HttpHeaders = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token.access_token}`);

    return this.httpClient.get<ISearch>(`${this.searchURL}${name}&type=artist`, {headers: headers});
  }
}
