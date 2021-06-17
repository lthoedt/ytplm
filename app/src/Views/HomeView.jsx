import {List} from "../Components/List"

import { useDispatch, useSelector } from 'react-redux';
import {PlaylistListItem} from "../Components/PlaylistListItem";

export function HomeView(props) {

    const state = useSelector(state => state.playlist);

    const playlists = state.playlists.map( playlist => {
        return PlaylistListItem( playlist );
    } );

    return (
        <div className="App">
            <h3>
                Your playlists
            </h3>

            <List items = {playlists} ></List>

            {/* profile START */}
            <div className="align bottom left">
                <div className="safearea half align content hcenter vcenter">
                    <img src="https://t3.ftcdn.net/jpg/01/41/81/30/360_F_141813016_vrZ4TFKphl7vLBty0kfQmIAEjFgtkJzW.jpg" />
                    <h4 className="safearea half">
                        Username
                    </h4>
                </div>
            </div>
            {/* profile END */}
        </div>
    )
}