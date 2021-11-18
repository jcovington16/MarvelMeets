import React from 'react'
import NavBar from '../NavBar/NavBar';

const EventsCreate = ({user}) => {

    



    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            
            <div className="row">

                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <h3>Create an Event</h3>
                    <form action="">
                        <div className="mb-2">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Event Title"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="topic" className="form-label">Topic</label>
                            <input type="text" className="form-control" placeholder="Event Topic"/>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="description">Desciption</label>
                            <textarea name="description" cols="70" rows="10"></textarea>
                        </div>

                        <div className="mb-2">
                            <label htmlFor="city" className="form-label">City</label>
                            <input type="text" className="form-control" placeholder="City of Event" />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" placeholder="Event Address"/>
                        </div>
                        
                        <div className="mb-2">
                            <label htmlFor="date" className="form-label">Event Date</label>
                            <input type="date" className="form-control"/>
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
