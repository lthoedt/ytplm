import {combineReducers} from 'redux'

import PlaylistReducer from './playlistReducer';

export const mainReducer = combineReducers({
    playlist: PlaylistReducer
})