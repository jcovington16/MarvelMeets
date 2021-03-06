import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { marvelMeets } from '../../api';
import data from '../../config/Config';
import { formatDistanceToNow, format } from 'date-fns';

const Events = ({user}) => {

    const [eventsInfo, setEvents] = useState([]);
    const [eventInfo, setEventInfo] = useState('');

    let gapi = window.gapi;
    let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    let SCOPES = "https://www.googleapis.com/auth/calendar.events"



    useEffect(() => {
        marvelMeets.get('http://localhost:5001/api/events/')
            .then(res => {
                setEvents(res.data)
                
            })
    }, [])

    const handleDelete = (e,id) => {
        e.preventDefault()
        marvelMeets.delete(`http://localhost:5001/api/events/${id}`,)
        window.location = '/home'
    }

    const handleRegistration = (e, info) => {
        e.preventDefault();
        if(user) {
            const infoObj = {_id: info}
            axios.put(`http://localhost:5001/api/events/${user._id}/register`, infoObj)
                .then(res => {
                    alert(res.data);
                }, [])
            
            handleGoogleEvent(info);
            
        }
    }

    const handleGoogleEvent = (info) => {
        try {

            marvelMeets.get(`http://localhost:5001/api/events/${info}/event`)
                .then(res => {
                    setEventInfo(res.data)
            }, [])


            gapi.load('client:auth2', () => {
                gapi.client.init({
                    apiKey: data['google-key'],
                    clientId: data.clientID,
                    disoveryDocs: DISCOVERY_DOCS,
                    scope: SCOPES
                })

            gapi.client.load('calendar', 'v3', () => console.log('loading calendar'))

            gapi.auth2.getAuthInstance().signIn()
                .then(() => {
                    
                    let event = {
                        'summary': `${eventInfo.title}`,
                        'location': `${eventInfo.address}`,
                        'description': `${eventInfo.description}`,
                        'start': {
                            'dateTime': `${eventInfo.event_date}`
                        },
                        'end': {
                            'dateTime': `${eventInfo.event_date}`
                        },
                        'recurrence': [
                            'RRULE:FREW=DAILY;COUNT=2'
                        ],
                        'reminders': {
                            'useDefault': false,
                            'overrides': [
                                {'method': 'email', 'minutes': 24 * 60},
                                {'method': 'popup', 'minutes': 10}
                            ]
                        }
        
                    }

                    let request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event,
                    })

                    request.execute(event => {
                        window.open(event.htmlLink)
                    })
                })
        })

        } catch (err) {
            
        }
        
        
    }



    return (
        <div className="mt-5">
            <div className='text-center'>
                <h2>Latest Events</h2>
            </div>
            

            <div className='d-flex flex-wrap mx-auto justify-content-center'>
                {eventsInfo.map((info) => {
                    return (
                        
                        <div className="mt-4" key={info._id} style={{margin: "5px"}}>
                            <div className="col-md-3">
                                <div className="card" style={{width: '20rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{info.title}</h5>
                                        <p className="card-text">{info.description}</p>
                                        <hr />
                                        <p className="card-text">Event { formatDistanceToNow(new Date(info.event_date), {addSuffix: true})}</p>
                                        <Link to={`/event_page/${info._id}`} className="btn btn-primary">See Event Details</Link>
                                        {user._id !== info.userId ? <button className="btn btn-primary" style={{margin: "3px"}} onClick={(e) => handleRegistration(e,info._id)}>Register</button> : ''}
                                        {user._id === info.userId ? <button className="btn btn-primary" style={{margin: '3px'}} type="submit" onClick={(e) => handleDelete(e, info._id)}>Delete Event</button> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    )
                })}
            </div>
        </div>
    )
}

export default Events;

