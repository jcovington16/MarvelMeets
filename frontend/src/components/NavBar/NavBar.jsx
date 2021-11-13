import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

const NavBar = ({user}) => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link>Home</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;
