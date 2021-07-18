export class Playlist {
    constructor( title, description, thumbnail, dateCreated, itemCount, owner, tracks = [] ) {
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.dateCreated = dateCreated;
        this.itemCount = itemCount;
        this.owner = owner;
        this.selected = false;

        this.tracks = tracks;
    }

    

}