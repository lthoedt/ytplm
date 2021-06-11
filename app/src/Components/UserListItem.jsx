import './CSS/UserListItem.css';

import { Divider } from './Divider';
import { SizedBox } from './SizedBox';

export function UserListItem({ user, prefix }) {
    return (
        <div className="userListItem align content vcenter">
            {(prefix && <span className = 'prefix'>{prefix}</span>)}
            {(prefix && <SizedBox width = 'var(--fourthSafearea)' ></SizedBox>)}
            {(prefix && <Divider></Divider>)}

            <SizedBox width = 'var(--fourthSafearea)' ></SizedBox>
            <img src={user.profilePicture} alt="profile picture" />
            <SizedBox width = 'var(--fourthSafearea)' ></SizedBox>
            <h4>{user.username}</h4>
        </div>
    )
}