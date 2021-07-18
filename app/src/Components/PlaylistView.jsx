import './CSS/PlaylistView.css'

import { SizedBox } from './SizedBox';
import { UserListItem } from './UserListItem';
import { Divider } from './Divider';

export function PlaylistView({ playlist }) {

    return (
        <div style={{ 'padding': 'var(--safearea)' }}>
            <div className="row playlistInfo">
                <div className="column align content hcenter">
                    <img style={{ height: '10em', width: '10em', borderRadius: 'var(--borderRadius)' }} src={playlist.thumbnail} alt='playlist thumbnail' />
                </div>
                <div className="column half">
                    <span className='playlistTitle'>
                        {playlist.title}
                    </span>
                    <span className='playlistDescription'>
                        {playlist.description}
                    </span>
                </div>
                <div className="column align content hcenter">
                    <div className='infoBlock'>
                        <span>{playlist.dateCreated}</span>
                        <UserListItem user={playlist.owner}></UserListItem>
                    </div>
                </div>
            </div>
            <div className="row playlistBar">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkbox-checkmark"></span>
                    <span>Select all</span>
                </label>
                <div className='align content vcenter left'>
                    <span>Order by</span>
                    <SizedBox width='var(--fourthSafearea)'></SizedBox>
                    <Divider></Divider>
                    <SizedBox width='var(--fourthSafearea)'></SizedBox>
                    <span className='orderBy'>
                        Title - Ascending
                    </span>
                </div>
                <div>
                    <input placeholder='Zoeken' className='search' />
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    )
}