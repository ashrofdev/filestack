import React from 'react';
import './style.css'

const Profile = () => {
    return (
        <div className="page profile">
            <figure>
                <img src={require('./default.png')} className="avatar"/>
            </figure>
            <p>Salman Ashraf</p>
            <p>salmanashraf853@gmail.com</p>
            <p>Joined filestack on 18-3-2020</p>
        </div>
    );
};

export default Profile;