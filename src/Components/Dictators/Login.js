import React from 'react';
import './style.css'

const LogIn = ({signUp, login}) => {
    return (
        <div className="signup_page">
            <div className="page_content">
                <header>LOGIN</header>
                <form>
                    <input placeholder="Username/email"/>
                    <input type="password" placeholder="Password"/>
                </form>
                <div className="btns">
                    <button onClick={signUp}>Don't have an account yet?</button>
                    <button onClick={login} className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;