import React, {useState} from 'react';
import './MainPage.css';
import NavBar from '../NavBar/NavBar';
import Countdown from '../Countdown/Countdown';
import Map from '../Map/Map';
import Events from '../Events/Events';
import marvelMeets from '../../api';


const MainPage = ({user}) => {

    const [searchForm, setSearchForm] = useState({
        city: ""
    })
    const [searchResults, setSearchResults] = useState();
    //const [showResults, setShowResults] = useState(false);


    const handleSearchForm= (e) => {
        setSearchForm({
            ...searchForm, [e.target.name]: e.target.value
        })
    }

    // const showInfo = () => {
    //     setShowResults(!showResults)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        marvelMeets.get(`/api/events/${searchForm.city}/cityevent`)
            .then(res => {
                setSearchResults(res.data)
            })
    }

    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            <div>
                Welcome {user.firstname}
            </div>

            <div>
                <Countdown />
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 d-flex justify-content-center">

                    <div className="mainpage__main">
                        <div className="mainpage__container">
                            <div className="mainpage__form">
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <div className="event__details">
        
                                        <div className="input-box">
                                            <span className="details">Search By City</span>
                                            <input type="text" placeholder="City" name="city" onChange={handleSearchForm}/>
                                        </div>

                                    </div>

                                    <div className="button">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {searchResults && searchResults.map((info) => {
                            return (
                                <div key={info._id} className="row mt-3">
                                    <div className="col-md-3">
                                        <div className="card" style={{width: '20rem'}}>
                                            <div className="card-body">
                                                <h5 className="card-title">{info.title}</h5>
                                                <p className="card-text">{info.description}</p>
                                                <hr />
                                                <p className="card-text">{info.event_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        <div className="mainpage__map mt-4">
                            <Map user={user}/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <Events user={user}/>                   
                        </div>

                    </div>

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default MainPage;
