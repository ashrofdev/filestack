import React from 'react';
import './style.css'

const Signup = () => {
    return (
        <div className="signup_page">
            <div className="content">
            <header>SIGN UP</header>
                <form>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <input type="email" placeholder="Email address"/>
                </form>
                <div className="btns">
                    <button>Already have an account?</button>
                    <button className="btn">SIGNUP</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;