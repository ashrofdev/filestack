import React from 'react';
import './style.css'

const LogIn = ({signUp, login}) => {
    const user = {
        username: '',
        email: '',
        password: ''
    }
    return (
        <div className="signup_page page2">
            <div className="page_content">
                <header>LOGIN</header>
                <form>
                    <input onChange={(e)=>user.username=e.target.value} placeholder="Username/email"/>
                    <input onChange={(e)=>user.password=e.target.value} type="password" placeholder="Password"/>
                </form>
                <div className="btns">
                    <button onClick={signUp}>Don't have an account yet?</button>
                    <button onClick={()=>login(user)} className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;