import React from 'react';
import NavBar from '../NavBar/NavBar';

const MainPage = ({user}) => {
    return (
        <div>
            <NavBar user={user}/>
            Main Page
            <p>Welcome {user.firstname}</p>

        </div>
    )
}

export default MainPage;
