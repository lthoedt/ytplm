import { useDispatch, useSelector } from 'react-redux';

import { PlaylistListItem } from '../Components/PlaylistListItem';
import { List } from '../Components/List';
import { ProfileBar } from '../Components/ProfileBar';
import { PlaylistView } from '../Components/PlaylistView';

export function PlaylistPage(props) {

    const state = useSelector(state => state.playlist);

    const playlists = state.playlists.map(playlist => {
        return PlaylistListItem(playlist, true);
    });

    const selectedPlaylist = state.playlists.filter(
        playlist => playlist.selected
    )[0]

    return (
        <div className="App">
            <h3 className='safearea'>
                Your playlists
            </h3>
            <div className='table'>
                <div className='column fourth'>
                    <List items={playlists} vertical={true} ></List>
                </div>
                <div className='column fill'>
                    <PlaylistView playlist = {selectedPlaylist}></PlaylistView>
                </div>
            </div>

            <div className="align bottom left">
                <ProfileBar></ProfileBar>
            </div>
        </div>
    )
}