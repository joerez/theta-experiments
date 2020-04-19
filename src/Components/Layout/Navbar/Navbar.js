import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <Link to="/" className="brand">ThetaGang</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;