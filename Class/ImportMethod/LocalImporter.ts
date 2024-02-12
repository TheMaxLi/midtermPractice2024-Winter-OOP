import { IImportable } from "../../Interface/IImportable";
import { Playlist } from "../Playlist";
import { readFile, writeFile, appendFile } from "fs/promises";

interface Albumthing {
    name: string
    tracks: string[]
}

interface albumJson {
    albums: Albumthing[]
}

export class LocalImporter implements IImportable {
    async loadPlaylist(path: string, albumName: string): Promise<Playlist | undefined>{
        let albums: any = await readFile(path, "utf8")
        albums = JSON.parse(albums)
        albums.albums.forEach(album => {
            if (album.name === albumName) return album.tracks
        });
        console.log("couldn't find your album")
        return 
    }
}