import React from 'react';

const files = [
    
    
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    }
]
const Cabinet = ({user, fileType, upload}) => {
    console.log(user.val.)
    return (
        <div className="cabinet page">
            <h2>{fileType} files</h2>
            <div className="layout">
                {
                    files.map(e=>{
                        return<div>
                            <video controls>
                                    <source src={require("./e.mp4")} type="video/mp4" />
                                </video>
                        </div>      
                    })
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