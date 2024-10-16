# Corso angular 4ci 2024/2025

## Link utili

- [Sito ufficiale nodejs](https://nodejs.org/en)
- [Sito ufficiale npm](https://www.npmjs.com/)
- [Sito ufficiale angular](https://angular.dev/)

## Primi passi
- Installare sul proprio PC nodejs
- Per contrallare se sono installati e la versione:
```bash
node -v
npm -v
```

## Come installare Angular
```bash
npm install -g @angular/cli
```  
> NB: -g installa angular in global mode, ovvero come funzionalità nuova (o programma nuovo) del mio computer  

Per controllare la corretta installazione di angular digitare: 
```bash ng version
```

## Creare la prima app
Per creare la prima app: 
```bash
ng new first-app
```  
> NB: > NB: i nomi composti vanno separati da trattino. Non usare camel case. Questo NON vale per i nomi delle variabili o degli oggetti all\'interno del codice.

Passaggi:
- Tipologia di fogli stile da utilizzare: CSS
- Abilitare SSR: NO

## Struttura di un'applicazione Angular
Un'applicazione è interamente contenuta in una directory con il nome del progetto. (se cancello la directory del progetto non rimane traccia.)
Per seguire comandi angular su un determinato progetto, è necessario entrare nella directory (renderla directory corrente.)

- .vscode: è una cartella privata di Visual Studio Code, NON VA MODIFICATA in nessun modo
- node_modules: contiene tutte le librerie necessarie alla realizzazione della nostra applicazione. Può essere ricreata in qualsiasi momento con il programma ```npm install```
- public: contiene tutti i file multimediali (immagini, suoni, video, ecc), di testo, ecc, che devono essere usati nell'applicazione, ad eccezione dei file che contengono codice.
- src: contiene tutti i file di codice che costituiscono l'applicazione:  
  - app: contiene tutti i componenti, servizi, menu, router, ecc
  - index.html: il file principale della webapp
  - main.ts: configurazione della webapp 
  - style.css: foglio stile principale dell'applicazione
- angular.json: definizione globale dell'applicazione. Salvo casi speciali non va modificato.
- package.json (package-lock.json): contiene l'elenco delle librerie necessarie al funzionamento di angular
- tsconfig...: contengono parametri di configurazione del linguaggio Typescript, raramente vengono modificati.

## Componenti

I componenti sono il cuore di un'applicazione Angular. Ogni applicazione Angular è essenzialmente una gerarchia di componenti che si combinano per formare l'interfaccia utente e gestire la logica dell'applicazione.

Per creare un nuovo componente è preferibile usare il comando *ng* della CLI.
```bash
ng generate component nome-componente
```

Questo comando genera:

- Un file TypeScript (`nome-componente.component.ts`)
- Un file HTML (`nome-componente.component.html`)
- Un file CSS (`nome-componente.component.css`)
- Un file di test (`nome-componente.component.spec.ts`)

> NB: se il nome del componente è composto da più parole, scriverle tutte in minusco e separarle con un trattino.

### Cos'è un Componente?

Un componente in Angular è una classe TypeScript che interagisce con il template HTML per definire una parte dell'interfaccia utente. Ogni componente comprende:

- **Una classe TypeScript** che contiene la logica e i dati.
- **Un template HTML** che definisce la vista.
- **Un set di stili CSS** (opzionale) per il design del componente.
- **Decoratori** che forniscono metadati ad Angular su come utilizzare il componente.

### Struttura di un Componente

Ecco un esempio base di un componente Angular:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-mio-componente',
  templateUrl: './mio-componente.component.html',
  styleUrls: ['./mio-componente.component.css']
})
export class MioComponente {
  titolo: string = 'Benvenuto nel mio componente!';

  constructor() { }

  saluta(): void {
    console.log('Ciao dal componente!');
  }
}
```

- **@Component**: È un decoratore che indica ad Angular che la classe è un componente.
- **selector**: È il nome del tag HTML utilizzato per inserire il componente in un template.
- **templateUrl**: Specifica il file HTML associato al componente.
- **styleUrls**: Specifica il file CSS per gli stili del componente.
- **MioComponente**: È la classe del componente che contiene dati e metodi.

### Utilizzo di un Componente

Per utilizzare un componente all'interno di un altro, inserisci il suo **selector** nel template HTML del componente padre:

```html
<!-- Nel template del componente padre -->
<app-mio-componente></app-mio-componente>
```
