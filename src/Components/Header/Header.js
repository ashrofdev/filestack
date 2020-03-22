import React from 'react';
import './style.css'

const Header = ({fixHeader, logOut}) => {
    return (
        <div className="header" 
            style={
                fixHeader ? {
                    backgroundColor: 'rgb(45, 53, 45)',
                    boxShadow: '2px 0 1rem black'
                }: null
            }
        >
            <h1 className="heading">Filesurge</h1>
            <button onClick={logOut}>Log out</button>
        </div>
    );
};


export default Header;