import React from 'react';
import './style.css'

const Header = ({fileType}) => {
    return (
        <div className="header">
            <h1 className="heading">Filestack</h1>
            <p>{fileType}</p>
        </div>
    );
};


export default Header;