import React from 'react';
import NavBar from '../NavBar/NavBar';

const EventPage = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Events Page
        </div>
    )
}

export default EventPage;