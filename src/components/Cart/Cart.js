import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { category, image, cost, id } = props.ride;
    // console.log(props.ride.category)
    return (
        <div className="col-md-3">
            <div className="ride-info mt-3 mb-5">
                <Link to={`/destination/${id}`}><img src={image}></img></Link>
                <h2>{category}</h2>
            </div>
        </div>
    );
};

export default Cart;