import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from '../../data/data.json';
import images from '../../images/Map.png';

const Destination = (props) => {
    const { rideId } = useParams();
    const [user, setUser] = useState({
        name: 'from',
        name: 'to'
    });

    const [isShowed, setIsShowed] = useState(false);

    const info = data.find(detail => rideId == detail.id);
    const { image, category, cost } = info;

    const handleBlur = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    }

    const handleSearch = (e) => {
        setIsShowed(true);
        e.preventDefault();
    }

    const img = {
        width: '50px',
        marginRight: '10px'
    }

    const style = {
        
        border: '1px solid gray',
        borderRadius: '5px',
        boxShadow: '10px 10px 10px white',
        background: 'purple',
        color: 'white',
        marginTop: '10px',
        padding: '5px'
    }

    const destination = {
        border: '1px solid goldenrod',
        borderRadius: '5px',
        boxShadow: '15px 15px 15px gray',
        background: 'white',
        padding: '10px',
        height: '350px',
        width: '100%'  
    }

    const distance ={
        background: 'green', 
        boxShadow: '10px 10px 10px white', 
        borderRadius: '5px', 
        color: 'white', 
        padding: '5px'
    }


    return (
        <div>
            <div className="container">
                <div className="row mt-3">

                    {
                        isShowed ? (

                            <div  className="col-md-4 col col-sm-12 text-center mt-3 ">
                                <div style={destination} className='mr-2'>
                                <div style={distance}>
                                    <p>{user.from}</p>
                                    <p>To</p>
                                    <p>{user.to}</p>
                                </div>
                                <div style={style} className="d-flex justify-content-between align-items-center">
                                    <img style={img} src={image} alt="" />
                                    <h5>{category}</h5>
                                    <p>${cost}</p>
                                </div>
                                <div style={style} className="d-flex justify-content-between align-items-center">
                                    <img style={img} src={image} alt="" />
                                    <h5>{category}</h5>
                                    <p>${cost}</p>
                                </div>
                                <div style={style} className="d-flex justify-content-between align-items-center">
                                    <img style={img} src={image} alt="" />
                                    <h5>{category}</h5>
                                    <p>${cost}</p>
                                </div>
                                </div>
                            </div>

                        ) :
                            <div className="col-md-4 col-12">
                                <form onSubmit={handleSearch}>
                                    <div class="form-group">
                                        <label for="name">Pick From</label>
                                        <input onBlur={handleBlur} type="text" name="from" className="form-control" id="name" placeholder="Mirpur 1" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="text">Pick To</label>
                                        <input onBlur={handleBlur} type="text" name="to" className="form-control" id="text" placeholder="Dhanmondi" required />
                                    </div>
                                    <div>
                                        <input className="account" type="Submit" value="Search" />
                                    </div>
                                </form>
                            </div>
                    }
                   
                    <div className="col-md-8 col-12">
                        <div className="p-3">
                            <img style={{ height: '400px', width: '100%', marginLeft: '10px' }} src={images} alt="" />
                        </div>
                    </div>                

                </div>
                
            </div>
        </div>
    );
};

export default Destination;