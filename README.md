# Corso angular 4ci 2024/2025

## Link utili

- [Sito ufficiale nodejs](https://nodejs.org/en)
- [Sito ufficiale npm](https://www.npmjs.com/)
- [Sito ufficiale angular](https://angular.dev/)

## Primi passi
- Installare sul proprio PC nodejs
- Per contrallare se sono installati e la versione:
  - node -v
  - npm -v

## Come installare Angular
```npm install -g @angular/cli```  
> NB: -g installa angular in global mode, ovvero come funzionalità nuova (o programma nuovo) del mio computer  

Per controllare la corretta installazione di angular digitare: ```ng version```

## Creare la prima app
Per creare la prima app: ```ng new first-app```  
> NB: > NB: i nomi composti vanno separati da trattino. Non usare camel case. Questo NON vale per i nomi delle variabili o degli oggetti all'interno del codice.

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


