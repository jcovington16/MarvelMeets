import React from 'react';
import NavBar from '../NavBar/NavBar';

const MainPage = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            <div>
                Welcome {user.firstname}
            </div>

            <div>
                Map
            </div>

            <div>
                Form
            </div>

            

        </div>
    )
}

export default MainPage;
