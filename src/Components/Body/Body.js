import React from 'react';
import './style.css'
import MyCabinet from '../MyCabinet/MyCabinets';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

const Body = ({route, navigate, openFolder, fileType, upload, user}) => {
    console.log(user)
    return (
        <div className="body">
            <section className="side-nav">
                <figure>
                    <img src={require('./default.png')} className="avatar"/>
                </figure>
                <nav className="nav">
                    <ul>
                        {
                            route === 'profile'?
                            <li className="clicked" onClick={()=> navigate('profile')}><p>👤 Profile</p></li>:
                            <li onClick={()=> navigate('profile')}><p>👤 Profile</p></li>
                        }
                        {
                            route === 'cabinet'|| route === 'open'?
                            <li className="clicked" onClick={()=> navigate('cabinet')}><p>🗄 My cabinet</p></li>:
                            <li onClick={()=> navigate('cabinet')}><p>🗄 My cabinet</p></li>
                        }
                        {
                            route === 'share'?
                            <li className="clicked" onClick={()=> navigate('share')}><p>⚙️ Share</p></li>:
                            <li onClick={()=> navigate('share')}><p>⚙️ Share</p></li>
                        }
                        {
                            route === 'settings'?
                            <li className="clicked" onClick={()=> navigate('settings')}><p>⚙️ Settings</p></li>:
                            <li onClick={()=> navigate('settings')}><p>⚙️ Settings</p></li>
                        }
                    </ul>
                </nav>
            </section>
            <section className="content"> 
               {
                   route === 'profile' ?
                   <Profile user={user}/>:
                   route === 'cabinet' || route === 'open' ?
                   <MyCabinet upload={upload} fileType={fileType} nav={route} openFolder={openFolder}/>:
                   route === 'settings'?
                   <Settings/>:null
               }
            </section>
        </div>
    );
};

export default Body;