import React, {useState, useEffect} from 'react';
import axios from 'axios';
import data from '../../config/Config'

const Events = ({user}) => {

    const [eventsInfo, setEvents] = useState([]);
    const [eventInfo, setEventInfo] = useState('');
    let gapi = window.gapi;
    let discover_docs = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    let scopes = "https://www.googleapis.com/auth/calendar.events"


    useEffect(() => {
        axios.get('http://localhost:5001/api/events/')
            .then(res => {
                setEvents(res.data);
            })
    }, [])

    // const handleTwilio = () => {
    //     axios.get(`http://localhost:5001/api/events/${user._id}/twilio`, eventInfo._id)
    // }

    const handleGoogleEvent = (info) => {
        try {
            axios.get(`http://localhost:5001/api/events/${info}/event`)
                .then(res => {
                    setEventInfo(res.data)
            }, [])

            gapi.load('client:auth2', () => {
                gapi.client.init({
                    apiKey: data['google-key'],
                    client_id: data.clientID,
                    disoveryDocs: discover_docs,
                    scope: scopes
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

                    //handleTwilio()

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


    return (
        <div className="mt-5 justify-content-center">
            <h2>Latest Events</h2>

            {eventsInfo.map((info) => {
                return (
                    <div className="row mt-4" key={info._id} style={{margin: "5px"}}>
                         <div className="col-md-3">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="..." alt="..." className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{info.title}</h5>
                                    <p className="card-text">{info.description}</p>
                                    <hr />
                                    <p className="card-text">{info.event_date}</p>
                                    <a href="event_page" className="btn btn-primary">See Event Details</a>
                                    <button className="btn btn-primary" style={{margin: "3px"}} onClick={(e) => handleRegistration(e,info._id)}>Register</button>
                                </div>
                            </div>
                        </div>
                </div>
                )
            })}
        </div>
    )
}

export default Events;

