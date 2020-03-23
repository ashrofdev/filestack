import React from 'react';
import './style.css'

const LogIn = () => {
    return (
        <div className="LogIn_page">
            <div className="content">
            <header>LOGIN</header>
                <form>
                    <input placeholder="Username/email"/>
                    <input type="email" placeholder="Email address"/>
                </form>
                <div className="btns">
                    <button>Already have an account?</button>
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;