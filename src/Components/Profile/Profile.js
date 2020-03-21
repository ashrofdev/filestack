import React from 'react';
import './style.css'

const Profile = () => {
    return (
        <div className="page profile">
            <figure>
                <img src={require('./default.png')} className="avatar"/>
            </figure>
            <div className="details">
                <p>Salman Ashraf</p>
                <p>salmanashraf853@gmail.com</p>
                <p>Joined filestack on 18-3-2020</p>
                <p>Images: {75}mb</p>
                <p>Videos: {103}mb</p>
                <p>MusicL {80}mb</p>
                <p>Documants: {7}mb</p>
                <p>Other files: {0}mb</p>
                <h3>Total: {345}mb</h3>
            </div>
        </div>
    );
};

export default Profile;