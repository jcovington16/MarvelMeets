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
        <div className="mt-5 justify-content-center">
            <h2>Latest Events</h2>

            {events.map((info) => {
                return (
                    <div className="row mt-4" key={info._id}>
                        <div className="col-md-3">
                            <div className="card" style={{width: '20rem'}}>
                                <img src="..." alt="..." className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{info.title}</h5>
                                    <p className="card-text">{info.description}</p>
                                    <hr />
                                    <p className="card-text">{info.event_date}</p>
                                    <a href="True" className="btn btn-primary">See Event Details</a>
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


//     return (
//         <div className="mt-5 justify-content-center">
//             <h2>Latest Events</h2>

//             {events && <div className="row mt-4">
//                 <div className="col-md-3">
//                     <div className="card" style={{width: '20rem'}}>
//                         <img src="..." className="card-img-top" alt="..." />
//                         <div className="card-body">
//                             <h5 className="card-title">{events[2].title}</h5>
//                             <p className="card-text">{events[2].description}</p>
//                             <hr />
//                             <p className="card-text">{events[2].event_date}</p>
//                             <a href="..." className="btn btn-primary">See Event Details</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>}
//         </div>
//     )
// }

// export default Events;
