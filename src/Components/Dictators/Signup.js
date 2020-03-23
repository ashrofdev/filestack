import React from 'react';
import './style.css'

const Signup = ({register}) => {
    return (
        <div className="signup_page">
            <div className="page_content">
            <header>SIGN UP</header>
                <form>
                    <input placeholder="First name"/>
                    <input placeholder="Last name"/>
                    <input placeholder="Username"/>
                    <input type="email" placeholder="Email address"/>
                </form>
                <div className="btns">
                    <button>Already have an account?</button>
                    <button className="btn" onClick={register}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;