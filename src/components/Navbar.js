import { Link } from 'react-router-dom'
import React from 'react';


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Password Tools</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/generate">Generate Password</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/check">Check Password</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;