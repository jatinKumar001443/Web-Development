import React from 'react';
import profile from '../assets/profile.jpeg';


const Card = () => {
    return (
        <div className='container'>
            <p id='name'>Jatin Kumar</p>
            <img id='img' src={profile} alt="Jatin Kumar" />
            <p id='desc'>Description of Jatin Kumar</p>
        </div>
    )
}

export default Card