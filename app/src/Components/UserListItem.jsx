import './CSS/UserListItem.css';

import { Divider } from './Divider';
import { SizedBox } from './SizedBox';

export function UserListItem({ user, prefix, compact = false }) {

    var profilePictureComponent = (
        <img src={user.profilePicture} alt="profile picture" />
    );

    return (
        (compact)
            ?
            <div className="profilePictureHolder compact">
                {profilePictureComponent}
            </div>
            :
            <div className="userListItem align content vcenter">
                {(prefix && <span className='prefix'>{prefix}</span>)}
                {(prefix && <SizedBox width='var(--fourthSafearea)' ></SizedBox>)}
                {(prefix && <Divider></Divider>)}
                {(prefix && <SizedBox width='var(--fourthSafearea)' ></SizedBox>)}
                
                {profilePictureComponent}
                <SizedBox width='var(--fourthSafearea)' ></SizedBox>
                <h4>{user.username}</h4>
            </div>
    )
}