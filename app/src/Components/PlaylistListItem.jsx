import './CSS/PlaylistListItem.css';

import { SizedBox } from './SizedBox';
import { Label } from './Label';

import { UserListItem } from './UserListItem';

export function PlaylistListItem(playlist) {
    return (
        <div className="align content hcenter vcenter column">

            <div className="playlistListItem align content vcenter">
                <img src={playlist.thumbnail} alt='Playlist thumbnail' />
                <SizedBox width='calc( var(--safearea) / 2 )'></SizedBox>
                <div className="left vcenter column">
                    <span className='listItemTitle'>
                        {playlist.title}
                    </span>
                    <span className='listItemDescription'>
                        {playlist.dateCreated}
                    </span>
                </div>
                <div className='self right'>
                    <Label value={playlist.itemCount} ></Label>
                </div>
            </div>

            <SizedBox height='var(--fourthSafearea)'></SizedBox>

            <UserListItem user={playlist.owner} prefix='Owner' ></UserListItem>

        </div>
    )
}