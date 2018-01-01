import React from 'react';

const files = [
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    },
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    },
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    },
    {
        name: 'test.mp3',
        type: 'audio/mp3',
        size: '40mb'
    }
]
const Cabinet = ({fileType, upload}) => {
    return (
        <div className="cabinet page">
            <h2>Here are your {fileType} files</h2>
            <div className="filess">
                {
                    files.map(e=>{
                        return <div style={{display:'flex', justifyContent:'space-between', padding: '.5rem', borderBottom: '1px solid black'}}>
                            <span>▶️</span> 
                            <p>{e.name}</p>
                            <p>{e.type}</p>
                            <p>{e.size}</p>
                         </div>
                    })
                }
            </div>
            <div className="cta">
                <h3>Upload a new file</h3>
                <label className="cta-btn" for="e">↑ Upload</label>
                <input id="e" style={{visibility:'collapse', display: 'none'}}  onChange={(e)=>upload(e)} type="file"/>
            </div>
        </div>
    );
};

export default Cabinet;