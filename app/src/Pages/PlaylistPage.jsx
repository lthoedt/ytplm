import { useDispatch, useSelector } from 'react-redux';

import { PlaylistListItem } from '../Components/PlaylistListItem';
import { TrackItem } from '../Components/TrackItem';
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

    const tracks = selectedPlaylist.tracks.map(track => {
        return TrackItem(track);
    });

    console.log(selectedPlaylist);

    return (
        <div className="App">

            <div className='table'>
                <div className='column fourth'>
                    <h3 className='safearea' style={{'fontSize': '1.5em', 'marginBottom': '0'}} >
                        Your playlists
                    </h3>
                    <List className={"stickToTop"} items={playlists} vertical={true} ></List>
                </div>
                <div className='column fill'>
                    <PlaylistView playlist={selectedPlaylist}></PlaylistView>
                    <List items={tracks} vertical={true} ></List>
                </div>
            </div>

            <div className="align bottom left" style={{position: 'sticky', bottom: '0'}}>
                <ProfileBar></ProfileBar>
            </div>
        </div>
    )
}