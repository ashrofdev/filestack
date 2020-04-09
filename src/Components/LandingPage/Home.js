import React, { Component } from 'react';
import './style.css'
import Fade from 'react-reveal/Fade'


class Home extends Component {
    componentDidMount() {
        document.querySelectorAll('img').forEach(e=>{
            e.addEventListener('click', ()=>e.requestFullscreen())
          })
    }
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
                        <button onClick={signUp}>Get Started for Free</button>
                    </div>
                </header>
                <section>
                    <Fade left delay={1000}>
                        <div className="left">
                            <h2>Get Started</h2>
                            <p>
                                Sign up now and gain access to a free, fast and secure method
                                of saving files of different format.
                            </p>
                        </div>
                    </Fade>
                    <Fade delay={500}>
                        <div style={{padding: '5rem'}} className="right">
                            <img  src={require('./svgs/3.png')}/>
                        </div>
                    </Fade>
                </section>
                <section>
                    <Fade bottom duration={2000}>
                        <div className="left">
                            <img src={require('./svgs/8.png')}/>
                        </div>
                    </Fade>
                    <Fade top duration={2000}>
                        <div className="right">
                            <h2>File Order</h2>
                            <p>Too many files to save?. Filesurge is here to help you out. 
                                We are the perfect solution to your problem. Join us now 
                                and enjoy a lifetime of organized file storage.
                            </p>
                        </div>
                    </Fade>
                </section>
                <section >
                    <Fade left>
                        <div className="left">
                            <h2>Privacy</h2>
                            <p> 
                                Filesurge provides you with a secure file storage system, as
                                protecting your data is our priority.
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div style={{padding: '5rem'}}  className="right">
                            <img src={require('./svgs/6.png')}/>
                        </div>
                    </Fade>
                </section>
                <section>
                    <div style={{textAlign: 'center', gridColumn: '2/8'}}>
                        <Fade right duration={1200}>
                            <h2 className="head">Your Cabinet Awaits You</h2>
                        </Fade>
                        <Fade left duration={1000} delay={500}>
                            <button onClick={signUp}>Get Started for Free</button>
                        </Fade>
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
                        <span style={{color: '#777', padding: '1rem'}}>&copy; All rights reserved By <a href="https://ashrof.herokuapp.com/">ashrofDev</a></span>
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

