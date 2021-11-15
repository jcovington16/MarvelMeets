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

            <div className="mainpage__main">
                <div className="mainpage__form">
                    <form action="">
                        <div className="event__details">

                            <div className="input-box">
                                <span className="details topic">Search By Topic</span>
                                <input type="text" placeholder="Topic" name="Topic"/>
                            </div>

                            <div className="input-box">
                                <span className="details hero">Search By Superhero</span>
                                <input type="text" placeholder="Hero" name="Hero"/>
                            </div>

                            <div className="input-box">
                                <span className="details city">Search By City</span>
                                <input type="text" placeholder="City" name="City"/>
                            </div>

                            <div className="input-box">
                                <span className="details date">Search By Date</span>
                                <input type="date" placeholder="First name" name="firstname" />
                            </div>
                        </div>

                        <div className="button">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="mainpage__map">
                    <Map />
                </div>

            </div>
        </div>
    )
}

export default MainPage;
