import React, { Component } from 'react';
import './style.css'

class Home extends Component {
    render() {
    
        const {login, signUp} = this.props
        return (
            <div className="home">
                <header>
                    <div className="header_top">
                        <div className="name">
                            <img className="logo" src={require('./logogreen.png')}/>
                            <h1>Filesurge</h1>
                        </div>
                        <div className="nav">
                            <button className="login" onClick={login}>SignIn</button>
                            <button className="signup" onClick={signUp}>SignUp</button>
                        </div>
                    </div>
                    <div className="header_body">
                        <h1 className="heading">Online File Storage Made Easy</h1>
                        <p>Filesurge reimagines how we save important data. You now have access to a
                        secure, fast and reliable tool you can entrust your data with.</p>
                        <button>Get Started for Free</button>
                    </div>
                </header>
                <section style={{backgroundColor: 'rgba(226, 248, 226, 0.281)'}}>
                    <div className="left">
                        <h2>Get Started</h2>
                        <p>Generate meaningful discussions with your audience and build a strong, 
                        loyal community. Thnk of the insightful conversations you miss out with a 
                        feedback from.</p>
                    </div>
                    <div className="right">
                        <img src={require('./2.svg')}/>
                    </div>
                </section>
                <section>
                    <div className="left">
                        <img src={require('./1.svg')}/>
                    </div>
                    <div className="right">
                        <h2>Get Started</h2>
                        <p>Generate meaningful discussions with your audience and build a strong, 
                        loyal community. Thnk of the insightful conversations you miss out with a 
                        feedback from.</p>
                    </div>
                </section>
                <section style={{backgroundColor: 'rgba(226, 248, 226, 0.281)'}}>
                    <div className="left">
                        <h2>Get Started</h2>
                        <p>Generate meaningful discussions with your audience and build a strong, 
                        loyal community. Thnk of the insightful conversations you miss out with a 
                        feedback from.</p>
                    </div>
                    <div className="right">
                        <img src={require('./3.svg')}/>
                    </div>
                </section>
                <section>
                    <div style={{textAlign: 'center', gridColumn: '2/8'}}>
                        <h2 style={{fontSize: '3rem', fontWeight: '100'}} className="head">Your Cabinet Awaits You</h2>
                        <button>Get Started for Free</button>
                    </div>
                </section>
                <footer className="footer">
                    <div className="left">
                        <div className="name">
                            <img className="logo" src={require('./logogreen.png')}/>
                            <h1>Filesurge</h1>
                        </div>
                        <p className="p">Lorem ispum dorlasit tulamesin illarison indiginious hjdguyre 
                        kuayg erh fyrg rekyg erhg fyeurg.</p>
                        <p className="p">☎ Phone: +234 816 909 4945</p>
                        <p style={{marginBottom: '1rem'}} className="p">✉️ Email: salmanashraf853@gmail.com</p>
                        <span style={{color: '#777', padding: '1rem'}}>&copy; All rights reserved By <a href="http://ashrof.herokuapp.com/">ashrofDev</a></span>
                    </div>
                    <div className="right">
                        <img style={{width: '15rem', opacity: '.2'}} src={require('./logogreen.png')}/>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;