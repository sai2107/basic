import React from 'react';
import './Bikes.css';
import assets from '../../assets/assets';

const Bikes = () => {
    return (
        <div className='big-container'>
            <div className='container-headings'>
                <h1>Rhyno Tx series Electric Scooter</h1>
                <p>An Intelligent scooter for the future</p>
            </div>
            <div className='bike-container'>
                <div className='info-box'>
                    <img src={assets.speedicon} alt="" />
                    <h2>High speed</h2>
                    <p>60 km/h speed with 2000 watts of immense power for flawless performance on different terrains.</p>
                </div>
                <div className='info-box'>
                    <img src={assets.distanceicon} alt="" />
                    <h2>High speed</h2>
                    <p>60 km/h speed with 2000 watts of immense power for flawless performance on different terrains.</p>
                </div>
                <div className='info-box'>
                    <img src={assets.batteryicon} alt="" />
                    <h2>High speed</h2>
                    <p>60 km/h speed with 2000 watts of immense power for flawless performance on different terrains.</p>
                </div>
                <div className='info-box'>
                    <img src={assets.bikeicon} alt="" />
                    <h2>High speed</h2>
                    <p>60 km/h speed with 2000 watts of immense power for flawless performance on different terrains.</p>
                </div>
            </div>
        </div>
    );
}

export default Bikes;
