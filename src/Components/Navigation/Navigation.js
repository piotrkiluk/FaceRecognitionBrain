import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        (isSignedIn) 
        ?<nav className='flex justify-end'>
            <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signIn')}>Sign Out</p>
        </nav> 
        :
        <nav className='flex justify-end'>
            <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('signIn')}>Sign In</p>
            <p className='f3 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
        </nav> 
    ); 
}

export default Navigation;