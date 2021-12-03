import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventPage = ({user, _id}) => {

    const eventId = useParams()
    const [eventInfo, setEventInfo] = useState()

    useEffect(() => {
        axios.get(`http://localhost:5001/api/events/${eventId._id}/event`)
            .then(res => {
                setEventInfo(res.data)
            })
    })

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            Events Page

            <div>

            </div>
        </div>
    )
}

export default EventPage;