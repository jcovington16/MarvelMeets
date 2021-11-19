import axios from 'axios';
import React, {useState} from 'react'
import NavBar from '../NavBar/NavBar';

const EventsCreate = ({user}) => {

    const [eventform, setEventForm] = useState({
        title: "",
        topic: "",
        description: "",
        city: "",
        address: "",
        event_date: ""
    })

    const handleChange = (e) => {
        setEventForm({
            ...eventform, [e.target.name]: e.target.value
        }, [])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventform)
        axios.post(`http://localhost:5001/api/events/${user._id}/events`, eventform);

    }



    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            
            <div className="row">

                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <h3>Create an Event</h3>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-2">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Event Title" name="title"  onChange={handleChange} />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="topic" className="form-label">Topic</label>
                            <input type="text" className="form-control" placeholder="Event Topic" name="topic" onChange={handleChange}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="description">Desciption</label>
                            <textarea name="description" cols="70" rows="10" onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" name="city" placeholder="City of Event" onChange={handleChange}/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" placeholder="Event Address" onChange={handleChange}/>
                        </div>
                        
                        <div className="mb-2">
                            <label htmlFor="date" className="form-label">Event Date</label>
                            <input type="date" className="form-control" name="event_date" onChange={handleChange}/>
                        </div>

                        <button className="btn-primary">Create Event</button>
                    </form>
                </div>

                <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default EventsCreate;
