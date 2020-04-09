import React from 'react';
import './style.css'



const Share = () => {
    document.querySelectorAll('.media').forEach(e=>{
        e.addEventListener('click', ()=>e.requestFullscreen())
      })
    return (
        <div className="page2 share">
            <header>Share</header>
            <section className="imagge">
                <h3>=> Images</h3>
                <div className="item">
                    <img className="media" src={require('./code.jpg')}/>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <img className="media" src={require('./code.jpg')}/>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <img className="media" src={require('./code.jpg')}/>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <img className="media" src={require('./code.jpg')}/>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
            </section>
            {/* <section className="videoss">
                <h3>=> Videos</h3>
                <div className="item">
                    <video className="media" controls>
                        <source src={require('./e.mp4')}/>
                    </video>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <video className="media" controls>
                        <source src={require('./e.mp4')}/>
                    </video>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <video className="media" controls>
                        <source src={require('./e.mp4')}/>
                    </video>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
                <div className="item">
                    <video className="media" controls>
                        <source src={require('./e.mp4')}/>
                    </video>
                    <p>Image name</p>
                    <button>Share</button>
                </div>
            </section> */}
        </div>
    );
};

export default Share;