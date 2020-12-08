import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './Brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0 bw4'>
            <Tilt className="Tilt br2 shadow-2 center" options={{ max : 60 }} style={{ height: 170, width: 150 }} >
                <div className="Tilt-inner">
                    <img className='mt4' src={Brain} alt='Brain Logo'/>
                </div>
            </Tilt>
        </div>
    ) 
}

export default Logo;