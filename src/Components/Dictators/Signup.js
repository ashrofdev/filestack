import React from 'react';
import './style.css'

const Signup = ({register, login}) => {
    const user = {
        name: '',
        username: '',
        email: '',
        password: ''
    }
    return (
        <div className="signup_page page2">
            <div className="page_content">
            <header>SIGN UP</header>
                <form>
                    <input onChange={(e)=>user.name=e.target.value} placeholder="Fullname"/>
                    <input onChange={(e)=>user.username=e.target.value} placeholder="Username"/>
                    <input onChange={(e)=>user.email=e.target.value} type="email" placeholder="Email address"/>
                    <input onChange={(e)=>user.password=e.target.value} type="password" placeholder="Password"/>
                </form>
                <div className="btns">
                    <button onClick={login}>Already have an account?</button>
                    <button className="btn" onClick={()=>register(user)}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;