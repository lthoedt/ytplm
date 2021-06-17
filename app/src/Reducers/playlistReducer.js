import {Playlist} from '../Models/Playlist';
import {User} from '../Models/User';

var playlist = new Playlist(
    'Playlist name',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'https://muzikercdn.com/uploads/products/3730/373019/c118cded.jpg',
    '01 - 10 - 1982',
    21,
    new User(
        'Username',
        'https://t3.ftcdn.net/jpg/01/41/81/30/360_F_141813016_vrZ4TFKphl7vLBty0kfQmIAEjFgtkJzW.jpg'
    )
)

console.log(playlist);

const initialStatePlaylist = {
    loading: false,
    playlists: [
        playlist,
        playlist,
        playlist,
        playlist,
        playlist,
    ]
}

const playlistActions = {
    LOADED_PLAYLISTS: 'LOADED_PLAYLISTS'
}

const PlaylistReducer = (state = initialStatePlaylist, action) => {
    switch (action.type) {
        case playlistActions.LOADED_PLAYLISTS:
            return { ...state, playlists: action.playlists };
        default:
            return state;
    }
}

export default PlaylistReducer;