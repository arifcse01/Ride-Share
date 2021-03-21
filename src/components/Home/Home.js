import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import rides from '../../data/data.json';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = (props) => {
    const [newRides, setNewRides] = useState([]);
    useEffect(() => {
        setNewRides(rides);
        // console.log(rides)
    }, [])
    return (
        <div className="banner">
            <div className="container">
            <div className="row rides">
                {
                    newRides.map(ride => <Cart ride={ride} key={ride.id}></Cart>)
                }
            </div>
        </div>
        </div>
    );
};

export default Home;