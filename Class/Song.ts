export class Song {
    private _name: string

    constructor(name: string) {
        this._name = this.setName(name)
    }

    public get name() : string {
        return this._name
    }
    
    setName(name : string) {
        return name
    }
}