export class Track {
    constructor( {thumbnail, title, uploader, duration, viewCount, likes, dislikes, description, dateUploaded} ) {
        this.thumbnail = thumbnail;
        this.title = title;
        this.uploader = uploader;
        this.duration = duration;
        this.viewCount = viewCount;
        this.likes = likes;
        this.dislikes = dislikes;
        this.description = description;
        this.dateUploaded = dateUploaded;
    }
}