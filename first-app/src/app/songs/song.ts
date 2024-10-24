export class Song {
    private _id: number;
    private _title: string = '';
    private _artist: string = '';
    private _duration: number = 0;
    private _genre: string = '';
    private _rating: number = 0;

    constructor(id: number, title: string, artist: string, duration: number, genre: string, rating: number) {
        this._id = id;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
        this.rating = rating;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    } 

    get artist(): string {
        return this._artist;
    }

    set artist(artist: string) {
        this._artist = artist;
    } 
    get duration(): number {
        return this._duration;
    }

    set duration(duration: number) {
        if (duration > 0) {
            this._duration = duration;
        }
        else {
            this._duration = 0;
        }
    } 

    get genre(): string {
        return this._genre;
    }

    set genre(genre: string) {
        this._genre = genre;
    } 

    get rating(): number {
        return this._rating;
    }

    set rating(rating: number) {
        if (rating < 1) {
            this._rating = 1;
        }
        else if (rating > 5) {
            this._rating = 5;            
        }
        else {
            this._rating = rating;
        }
    } 

}
