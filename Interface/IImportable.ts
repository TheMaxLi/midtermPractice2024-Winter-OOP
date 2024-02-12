import { Playlist } from "../Class/Playlist";

export interface IImportable {
    loadPlaylist(path: string, albumName: string) :Promise<Playlist | undefined>
}