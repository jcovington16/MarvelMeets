import React from 'react'
import NavBar from '../NavBar/NavBar';

const Events = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Events
        </div>
    )
}

export default Events;
