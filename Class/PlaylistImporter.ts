import { IImportable } from "../Interface/IImportable";

export class PlaylistImporter {
    private _importer: IImportable

    constructor(importer: IImportable) {
        this._importer = importer
    }
}