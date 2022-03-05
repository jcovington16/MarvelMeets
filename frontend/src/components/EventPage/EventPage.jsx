import React, {useEffect, useState} from 'react';
import NavBar from '../NavBar/NavBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventPage = ({user}) => {

    const eventId = useParams()
    const [eventInfo, setEventInfo] = useState()

    useEffect(() => {
        axios.get(`process.env.REACT_APP_API_URL/api/events/${eventId._id}/event`)
            .then(res => {

                setEventInfo(res.data)
            })
    },)

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>

            <div className="row">
                <h2>Events Page</h2>
                <div className="col-md-3"></div>
                
                {eventInfo && <div className="col-md-6 justify-content-center">
                    <h3>{eventInfo.title}</h3>
                    <br />
                    <h4>{eventInfo.topic}</h4>
                    <hr />
                    <p>{eventInfo.description}</p>
                    <h5>Location: {eventInfo.address}, {eventInfo.city}</h5>
                    <h5>Date: {eventInfo.event_date}</h5>
                    <h5>Attendees: {eventInfo.attendees}</h5>
                </div>}
                <div className="col-md-3"></div>

            </div>
        </div>
    )
}

export default EventPage;