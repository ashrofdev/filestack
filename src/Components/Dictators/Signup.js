import React from 'react';
import './style.css'

const Signup = ({register, login}) => {
    return (
        <div className="signup_page page2">
            <div className="page_content">
            <header>SIGN UP</header>
                <form>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <input placeholder="Username"/>
                    <input type="email" placeholder="Email address"/>
                </form>
                <div className="btns">
                    <button onClick={login}>Already have an account?</button>
                    <button className="btn" onClick={register}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;