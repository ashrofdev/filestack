
import React from 'react';

const files = [
    
    
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    }
]
const Cabinet = ({user, fileType, upload}) => {
    console.log(user.val.image)
    const images = Object.values(user.val.image)
    const videos = Object.values(user.val.video)
    const audio = Object.values(user.val.audio)
    const document = Object.values(user.val.document)
    const others = Object.values(user.val.other)
    return (
        <div className="cabinet page">
            <h2>{fileType} files</h2>
            <div className="layout">
                {
                    fileType === 'image'?
                    images.map(e=>{
                        return<div>
                                <p>{e.name}</p>
                                <a href={`${e.url}`} download={`${e.url}`}>Download</a>
                                <img src={e.url}/>
                        </div>      
                    }):
                    fileType === 'video'?
                    videos.map(e=>{
                        return<div>
                                <p>{e.name}</p>
                                <a href={`${e.url}`} download>Download</a>
                                <video controls>
                                    <source src={e.url}/>
                                </video>
                        </div>      
                    }):
                    fileType === 'audio'?
                    audio.map(e=>{
                        return<div>
                                <p>{e.name}</p>
                                <audio controls>
                                    <source src={e.url}/>
                                </audio>
                        </div>      
                    }):
                    fileType === 'document'?
                    document.map(e=>{
                        return<div>
                                <p>{e.name}</p>
                                <a target="_blank" href={`${e.url}`} download>Download</a>
                            <a href={`${e.url}`}>v</a>
                        </div>      
                    }):
                    fileType === 'other'?
                    others.map(e=>{
                        return<div>
                                <p>{e.name}</p>
                                <a href={`${e.url}`} download>Download</a>
                                <a target="_blank" href={`${e.url}`}>v</a>
                        </div>      
                    }):null

                }
                
            </div>
            <div className="cta">
                <h3>Upload a new file</h3>
                <label className="cta-btn" for="upload">↑ Upload</label>
                <input id="upload" style={{display: 'none'}}  onChange={(e)=>upload(e)} type="file"/>
            </div>
        </div>
    );
};

export default Cabinet;