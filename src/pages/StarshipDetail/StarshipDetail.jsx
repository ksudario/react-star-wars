import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipDetail.css';


function StarShipDetail(props) {
    return (
        <div className='starship'>
        <div>
        <p>NAME: {props.location.state.ship.name}</p>
        <p>MODEL: {props.location.state.ship.model}</p>
        <Link className='hover' to='/'><u>RETURN</u></Link>
        </div>
        </div>

    );
}

export default StarShipDetail;