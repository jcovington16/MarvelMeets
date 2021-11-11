import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password : "",
      });
    const handleChange = (event) => {
        setLogin({
        ...login , [event.target.name]: event.target.value
        },[]);
      }

    // const handleSubmit = (event) =>  {
    //     // store the states in the form data
    //     event.preventDefault();
    //     axios.post('http://localhost:5001/api/auth/', login)
    //         .then (response => {
    //             const responseData = response.data
    //             localStorage.setItem('token', responseData);
    //             window.location='/home';              
    //         })
            
    // }
    return (
        <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="true">password?</a>
                </p>
            </form>
        </div>
    )
}

export default Login
