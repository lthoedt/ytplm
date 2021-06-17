import './CSS/PlaylistView.css'

import { SizedBox } from './SizedBox';
import { UserListItem } from './UserListItem';
import { Divider } from './Divider';

export function PlaylistView({ playlist }) {

    console.log(playlist);
    return (
        <div>
            <table>
                <div className="row">
                    <div className="column align content hcenter">
                        <img style={{height: '10em', width: '10em', borderRadius: 'var(--borderRadius)'}} src={playlist.thumbnail} alt='playlist thumbnail' />
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
                <div className="row">
                    <div>
                        <input type='checkbox' />
                        <span>Select all</span>
                    </div>
                    <div className='align content vcenter left'>
                        <span>Order by</span>
                        <SizedBox width='var(--fourthSafearea)'></SizedBox>
                        <Divider></Divider>
                        <SizedBox width='var(--fourthSafearea)'></SizedBox>
                        <span>
                            Title - Ascending
                        </span>
                    </div>
                    <div>
                        <input placeholder='Zoeken' />
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </table>
        </div>
    )
}