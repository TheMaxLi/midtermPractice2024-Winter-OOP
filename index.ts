import path from "path";
import { Album } from "./Class/Album";
import { Artist } from "./Class/Artist";
import { LocalImporter } from "./Class/ImportMethod/LocalImporter";
import { Playlist } from "./Class/Playlist";
import { PlaylistImporter } from "./Class/PlaylistImporter";
import { Song } from "./Class/Song";

let Joeyy = new Artist("Joeyy")
let album = new Album("MIRY", Joeyy, 2023)
let song = new Song("Gout")
album.addSong(song)

let playlist = new Playlist("is this the cure to male lonliness? 😲")
playlist.addAlbum(album)

let localPlaylistImporter = new PlaylistImporter(new LocalImporter())

let test = new LocalImporter()
let path2 = path.join(__dirname, "albums.json")
test.loadPlaylist(path2, "Album1")