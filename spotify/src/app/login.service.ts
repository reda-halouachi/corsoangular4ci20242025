import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { ICredentials } from './i-credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginOk: WritableSignal<boolean> = signal<boolean>(false);
  loginOk: Signal<boolean> = this._loginOk.asReadonly();

  private _errorFeedback: WritableSignal<boolean> = signal(false);
  errorFeedback: Signal<boolean> = this._errorFeedback.asReadonly();

  constructor() { }

  // Sistema fake di login

  login(credenziali: ICredentials) {
    if(credenziali.username == 'pippo' && credenziali.password == 'cisco') {
      // login ok
      this._loginOk.set(true);
      this._errorFeedback.set(false);
    }
    else {
      this._errorFeedback.set(true);
    }
  }
}
