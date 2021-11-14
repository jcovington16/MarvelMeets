import React from 'react'
import NavBar from '../NavBar/NavBar';

const Heroes = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Heroes
        </div>
    )
}

export default Heroes;
