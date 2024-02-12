import { Artist } from "./Artist"
import { Song } from "./Song"

export class Album {
    private _title: string
    private _artist: Artist
    year: number
    private _songs: Song[] = []

    constructor(title: string, artist: Artist, year: number) {
        this._title = this.setTitle(title)
        this._artist = artist
        this.year = year
    }

    get title() {
        return this._title
    }

    setTitle(title: string) {
        return title
    }

    get songs() {
        return this._songs
    }

    addSong(song: Song) {
        this._songs.push(song)
    }
}