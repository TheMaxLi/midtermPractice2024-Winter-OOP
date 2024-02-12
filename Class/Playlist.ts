import { Album } from "./Album"
import { Song } from "./Song"

export class Playlist {
    private _name: string
    private _songs: Song[] = []

    constructor(name: string) {
        this._name = name
    }

    addAlbum(album: Album) {
        album.songs.forEach(song => {
            this._songs.push(song)
        });
    }  
}