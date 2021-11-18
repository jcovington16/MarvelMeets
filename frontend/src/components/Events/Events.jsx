import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Events = ({user}) => {

    const [events, setEvents] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5001/api/events/')
            .then(res => {
                setEvents(res.data);
            })
    }, [])


    return (
        <div>
            <h3>Latest Events</h3>

            <div className="row">

            </div>
        </div>
    )
}

export default Events;
