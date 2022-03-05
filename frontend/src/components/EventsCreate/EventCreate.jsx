import axios from 'axios';
import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar';

const EventsCreate = ({user}) => {

    const [eventform, setEventForm] = useState({
        title: "",
        topic: "",
        description: "",
        city: "",
        address: "",
        event_date: "",
        state: "",
    })

    const [eventID, setEventID] = useState();

    const handleChange = (e) => {
        setEventForm({
            ...eventform, [e.target.name]: e.target.value
        }, [])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/events/${user._id}/events`, eventform)
            .then(res => {
                setEventID(res.data._id)
            })
        setTimeout(() => {
            alert('Creating Event...')
            window.location ='/home'
        }, 1000)
    }

    useEffect(() => {
        if (eventID)
        axios.get(`/api/events/location/${eventID}`);
    }, [eventID])


    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            
            <div className="row mb-4">

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
                            <label htmlFor="state" className="form-lable">State</label>
                            <select name="state" onChange={handleChange}>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="California">California</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhode Island">Rhode Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
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
