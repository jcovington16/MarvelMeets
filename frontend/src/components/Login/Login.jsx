import React, {useState} from 'react';
import {marvelMeets} from '../../api';
import './Login.css';

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

    const handleSubmit = (event) =>  {
        // store the states in the form data
        event.preventDefault();
        marvelMeets.post(`/api/auth/`, login)
            .then (response => {
                const responseData = response.data
                localStorage.setItem('token', responseData);
                console.log(responseData)
                window.location='/home';              
            })
    }

    return (
        <div className="container">
            <div className="login__container">

                <div className="login__title">
                    <h3>Sign In</h3>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <div className="login__details">
                        
                            <div className="input-box">
                                <span className="details">Email address</span>
                                <input type="email" placeholder="Enter email" name="email" value={login.email} onChange={handleChange}/>
                            </div>

                            <div className="input-box">
                                <span className="details">Password</span>
                                <input type="password"  placeholder="Enter password" name="password" value={login.password} onChange={handleChange}/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                        <div>
                            Don't have an account? <a href="/register">Register</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;
