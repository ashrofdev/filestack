import React from 'react';

const Cabinet = ({fileType}) => {
    return (
        <div className="cabinet page">
            <h2>Here are your {fileType} files</h2>
            <div className="files">

            </div>
        </div>
    );
};

export default Cabinet;