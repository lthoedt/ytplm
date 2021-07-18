import {combineReducers} from 'redux'

import PlaylistReducer from './playlistReducer';
import TrackReducer from './trackReducer';

export const mainReducer = combineReducers({
    playlist: PlaylistReducer,
    track: TrackReducer
})