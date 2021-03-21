import React, { useEffect, useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    const handleLogIn = () =>{
        history.push("/signup");
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#"><h2 style={{color: 'green'}}>Amazing Riders</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Destination</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="#">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="#">Contact</Link>
                            </li>
                            <button onClick={handleLogIn} className="btn btn-info">Log In</button>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;