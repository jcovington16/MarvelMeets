import React from 'react';
import './MainPage.css';
import NavBar from '../NavBar/NavBar';
import Map from '../Map/Map';

const MainPage = ({user}) => {
    return (
        <div>
            <div>
                <NavBar user={user}/>
            </div>
            <div>
                Welcome {user.firstname}
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 d-flex justify-content-center">

                    <div className="mainpage__main">
                        <div className="mainpage__container">
                            <div className="mainpage__form">
                                <form action="">
                                    <div className="event__details">

                                        <div className="input-box">
                                            <span className="details">Search By Topic</span>
                                            <input type="text" placeholder="Topic" name="Topic"/>
                                        </div>

                                        <div className="input-box">
                                            <span className="details">Search By Hero</span>
                                            <input type="text" placeholder="Hero" name="Hero"/>
                                        </div>

                                        <div className="input-box">
                                            <span className="details">Search By City</span>
                                            <input type="text" placeholder="City" name="City"/>
                                        </div>

                                        <div className="input-box">
                                            <span className="details">Search By Date</span>
                                            <input type="date" placeholder="First name" name="firstname" />
                                        </div>
                                    </div>

                                    <div className="button">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="mainpage__map">
                            <Map />
                        </div>

                        <div>
                            Latest Events
                        </div>

                    </div>

                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default MainPage;
