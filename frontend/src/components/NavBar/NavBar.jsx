import React from 'react';
import { Link } from 'react-router-dom';
//import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar({ user }) {
    return (
        <div className="navbar">
            <ul className="navbar__links">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/heroes">Heroes</Link>
                </li>
                {user && <div>
                    <li className="dropdown">
                        <a href="true" className="dropdown-toggle"><span>{user.firstname}</span></a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="/events">Add Event</a>
                            </li>
                            <li>
                                <a href="true">Profile</a>
                            </li>
                            <li>
                                <a href="/logout">Logout</a>
                            </li>
                        </ul>
                    </li>
                </div>}
            </ul>
        </div>
    );
}

export default NavBar;
