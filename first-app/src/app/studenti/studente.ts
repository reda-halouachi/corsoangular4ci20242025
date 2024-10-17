export class Studente {
    private _id: number;
    private _nome: string;
    private _cognome: string;
    private _classe: string;
    private _sommaVoti: number;
    private _numeroVoti = 0;

    constructor(id: number, nome: string, cognome: string) {
        this._id = id;
        this._nome = nome;
        this._cognome = cognome;
        this._classe = 'Non assegnata';
        this._sommaVoti = 0;
    }

    // getter e setter: NON possono avere gli stessi nomi degli attributi

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }
    get cognome(): string {
        return this._cognome;
    }

    set cognome(cognome: string) {
        this._cognome = cognome;
    }
    get classe(): string {
        return this._classe;
    }

    set classe(classe: string) {
        this._classe = classe;
    }    

    aggiungiVoto(voto: number): void {
        this._sommaVoti += voto;
        this._numeroVoti++;
    }

    get mediaVoti(): number {
        if (this._numeroVoti > 0) {
            return this._sommaVoti / this._numeroVoti;
        }
        else {
            return 0;
        }
    }
    


}
