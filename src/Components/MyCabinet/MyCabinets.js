import React from 'react';
import Cabinet from './Cabinet';
import './style.css'

const MyCabinet = ({openFolder, nav, fileType, upload}) => {
    return (
        <div className="page">
            <h2 className="head">Welcome to your cabinet Ashraf</h2>
            {
                nav === 'cabinet'?
                <div className="files">
                    <div className="file" onClick={()=>openFolder('image')}>
                        <figure>📁</figure>
                        IMAGE
                    </div>
                    <div className="file" onClick={()=>openFolder('video')}>
                        <figure>📁</figure>
                        VIDEO
                    </div>
                    <div className="file" onClick={()=>openFolder('audio')}>
                        <figure>📁</figure>
                        MUSIC
                    </div>
                    <div className="file" onClick={()=>openFolder('document')}>
                        <figure>📁</figure>
                        DOCUMENT
                    </div>
                    <div className="file" onClick={()=>openFolder('other')}>
                        <figure>📁</figure>
                        Others
                    </div>
                </div>:
                nav === 'open'?
                <Cabinet upload={upload} fileType={fileType}/>:null
            }
        </div>
    );
};

export default MyCabinet;