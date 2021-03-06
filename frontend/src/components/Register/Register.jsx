import React, {useState} from 'react'
import {marvelMeets} from '../../api';
import './Register.css'


const Register = () => {

    const [regform, setRegform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        city: "",
        state: "",
        favhero: "",
        phone_number: ""

    });

    const handleChange = (e) => {
        setRegform({
            ...regform, [e.target.name]: e.target.value
        }, []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newObj = {
            firstname:regform.firstname,
            lastname: regform.lastname,
            email: regform.email,
            username: regform.username,
            password: regform.password,
            city: regform.city,
            state: regform.state,
            favhero: regform.favhero,
            phone_number: regform.phone_number}

        marvelMeets.post('/api/users/', newObj);
        console.log(newObj)
        window.location='/';
    }



    return (
        <div className="container">
            <div className="register__container">
                <div className="register__title">
                    <h3>Register</h3>
                </div>
                <div className="content">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="register__details">
                            <div className="input-box">
                                <span className="details">First name</span>
                                <input type="text" placeholder="First name" name="firstname" value={regform.firstname} onChange={handleChange}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Last name</span>
                                <input type="text" placeholder="Last name" name="lastname" value={regform.lastname} onChange={handleChange}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Email Address</span>
                                <input type="email" placeholder="Email Address" name="email" value={regform.email} onChange={handleChange}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Username" name="username" value={regform.username} onChange={handleChange}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password" placeholder="Password" name="password" value={regform.password} onChange={handleChange}/>
                            </div>

                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Phone Number" name="phone_number" value={regform.phone_number} onChange={handleChange}/>
                            </div>
                            <div className="input-box">
                                <span className="details">City</span>
                                <input type="text" placeholder="City" name="city" value={regform.city} onChange={handleChange}/>
                            </div>
                            <div className="select-box">
                                <span className="selector">State</span>
                                <select name="state" id="state" value={regform.state} onChange={handleChange}>
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
                            
                            <div className="select-box">
                                <span className="selector">Favorite Hero</span>
                                <select name="favhero" id="favhero" value={regform.favhero} onChange={handleChange}>
                                    <option value="SpiderMan">Spider Man</option>
                                    <option value="Hulk">Hulk</option>
                                    <option value="Dr. Strange">Dr. Strange</option>
                                    <option value="Thor">Thor</option>
                                    <option value="Iron Man">Iron Man</option>
                                    <option value="Black Panther">Black Panther</option>
                                    <option value="Ant-Man">Ant-Man</option>
                                    <option value="Captain America">Captain America</option>
                                    <option value="Deadpool">Deadpool</option>
                                    <option value="Captain Marvel">Captain Marvel</option>
                                    <option value="Wolverine">Wolverine</option>
                                    <option value="Luke Cage">Luke Cage</option>
                                    <option value="Guardians Of The Galaxy">Guardians Of The Galaxy</option>
                                    <option value="Black Widow">Black Widow</option>
                                    <option value="Vision">Vision</option>
                                    <option value="Wanda">Wanda</option>
                                    <option value="Hawk Eye">Hawk Eye</option>
                                </select>
                            </div>

                        </div>
                        <div className="button">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>

                        <div>
                            Have an account? <a href="/">Login</a>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Register;
