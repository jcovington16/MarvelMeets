import React, {useState} from 'react'
import axios from 'axios';
import './Register.css'


const Register = () => {

    const [regform, setRegform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""

    });

    const handleChange = (e) => {
        setRegform({
            ...regform, [e.target.name]: e.target.value
        }, []);
    }

    const handleSubmit = (e) => {
        e.preventDefualt();
        axios.post('http://localhost:5001/api/users/', regform);
        window.location='/';
    }



    return (

        <div className="register__container">
            <div className="register__title">
                <h3>Register</h3>
            </div>
            <div className="content">
                <form action="">
                    <div className="register__details">
                        <div className="input-box">
                            <span className="details">First name</span>
                            <input type="text" placeholder="First name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Last name</span>
                            <input type="text" placeholder="Last name"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Email Address</span>
                            <input type="text" placeholder="Email Address"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Username"/>
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="input-box">
                            <span className="details">City</span>
                            <input type="text" placeholder="City"/>
                        </div>
                        <div className="select-box">
                            <span className="selector">State</span>
                            <select name="state" id="state" >
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
                            <select name="hero" id="hero">
                                <option value="SpiderMan">SpiderMan</option>
                                <option value="Hulk">Hulk</option>
                                <option value="Dr. Strange">Dr. Strange</option>
                                <option value="Thor">Thor</option>
                            </select>
                        </div>

                    </div>
                    <div className="button">
                        <input type="submit" value="Register"/>
                    </div>

                    <div>
                        Have an account? <a href="/">Login</a>
                    </div>
                </form>
            </div>
            
        </div>

    )
}

export default Register;
