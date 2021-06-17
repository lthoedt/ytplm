import { List } from "../Components/List"

import { useDispatch, useSelector } from 'react-redux';
import { PlaylistListItem } from "../Components/PlaylistListItem";
import { ProfileBar } from "../Components/ProfileBar";

export function HomePage(props) {

    const state = useSelector(state => state.playlist);

    const playlists = state.playlists.map(playlist => {
        return PlaylistListItem(playlist);
    });

    return (
        <div className="App">
            <h3>
                Your playlists
            </h3>

            <List items={playlists} ></List>

            {/* profile START */}
            <div className="align bottom left">
                <ProfileBar></ProfileBar>
            </div>
            {/* profile END */}
        </div>
    )
}