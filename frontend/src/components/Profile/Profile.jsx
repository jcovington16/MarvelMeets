import React from 'react';
import NavBar from '../NavBar/NavBar';

const Profile = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Profile Page
        </div>
    )
}

export default Profile;
