export class Libro {
    private _isbn: string;
    private _titolo: string;
    private _autore: string;
    private _genere: string;
    private _anno: number;
    private _nrcopie: number;

    constructor(isbn: string, titolo:string, autore: string, genere: string, anno: number, nrcopie: number) {
        this._isbn = isbn;
        this._titolo = titolo;
        this._autore = autore;
        this._genere = genere;
        this._anno = anno;
        this._nrcopie = nrcopie;
    }

    get isbn(): string {
        return this._isbn;
    }
    set isbn(isbn: string) {
        // Preferibile controllare il codice prima di assegnarlo
        this._isbn = isbn;
    }
    get titolo(): string {
        return this._titolo;
    }
    set titolo(titolo: string) {
        // Preferibile controllare il codice prima di assegnarlo
        this._titolo = titolo;
    }
    get autore(): string {
        return this._autore;
    }
    set autore(autore: string) {
        // Preferibile controllare il codice prima di assegnarlo
        this._autore = autore;
    }
    get genere(): string {
        return this._genere;
    }
    set genere(genere: string) {
        // Preferibile controllare il codice prima di assegnarlo
        this._genere = genere;
    }
    get anno(): number {
        return this._anno;
    }
    set anno(anno: number) {
        // Preferibile controllare il codice prima di assegnarlo
        this._anno = anno;
    }

    get nrcopie(): number {
        return this._nrcopie;
    }

    prestito(): void {
        if (this._nrcopie > 0) {
            this._nrcopie--;           
        }
        else {
            throw new Error('Non sono presenti copie di questo libro.');
        }
    }

    restituzione(): void {
        this._nrcopie++;
    }
}
