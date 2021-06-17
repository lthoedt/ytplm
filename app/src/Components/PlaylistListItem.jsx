import './CSS/PlaylistListItem.css';

import { SizedBox } from './SizedBox';
import { Label } from './Label';

import { UserListItem } from './UserListItem';
import { Divider } from './Divider';

export function PlaylistListItem(playlist, compact = false) {
    return (
        <div className="align content hcenter vcenter column">

            <div className={"playlistListItem align content vcenter " + (playlist.selected && compact && "selected")}>
                {(compact && <UserListItem user={playlist.owner} prefix='Owner' compact={compact} ></UserListItem>)}

                <img src={playlist.thumbnail} alt='Playlist thumbnail' />
                <SizedBox width='var(--fourthSafearea)'></SizedBox>
                <div className="left vcenter column">
                    <span className='listItemTitle'>
                        {playlist.title}
                    </span>
                    <span className='listItemDescription'>
                        {playlist.dateCreated}
                    </span>
                </div>
                <SizedBox width='var(--fourthSafearea)'></SizedBox>
                <div className='self right'>
                    <Label value={playlist.itemCount} ></Label>
                </div>
            </div>

            {(!compact && <SizedBox height='var(--fourthSafearea)'></SizedBox>)}

            {(!compact && <UserListItem user={playlist.owner} prefix='Owner' ></UserListItem>)}

            {
                (
                    playlist.selected && compact && <div style={{ width: '-webkit-fill-available', margin: 'var(--safearea) var(--halfSafearea) 0 var(--halfSafearea)' }}><Divider full={true}></Divider></div>
                )
            }
        </div>
    )
}