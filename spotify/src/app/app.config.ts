import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    // provideHttpClient() mette a disposizione dell'applicazione un servizio (da utilizzare con
    // Dependency Injection) per inviare richieste HTTP
    provideHttpClient()
  ]
};
