import { CanActivateFn, Router } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { inject } from '@angular/core';

export const tokenOkGuard: CanActivateFn = (route, state) => {
  // Inietto il servizio SpotifyService nella funzione
  // Attenzione che tokenOkGuard è una function, non posso usare le parole chiave 
  // private o altro, devo dichiarare o una variabile con let o una costante const
  // La scelta piu comune è const.
  const spotifyService: SpotifyService = inject(SpotifyService);
  // Inietto il servizio router per gestire il redirect verso altri componenti (URL)
  const router: Router = inject(Router);

  // Controllo se dispongo del token

  if(spotifyService.tokenOK()){
    // Il token è presente, si può accedere al componente che usa questa guardi
    return true;
  } 
  else{
    // Il token non è presente. Cosa facciamo?

    // Eseguo un redirect verso la home page.
    router.navigateByUrl('/');

    // Proibiamo l'accesso al componente
    return false;
  }
};