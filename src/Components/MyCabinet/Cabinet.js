import React from 'react';

const Cabinet = ({fileType, upload}) => {
    return (
        <div className="cabinet page">
            <h2>Here are your {fileType} files</h2>
            <div className="files">

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