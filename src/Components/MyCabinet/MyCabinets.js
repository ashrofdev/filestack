import React from 'react';
import Cabinet from './Cabinet';
import './style.css'

const MyCabinet = ({user, openFolder, nav, fileType, upload}) => {
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
                <Cabinet user={user} upload={upload} fileType={fileType}/>:null
            }
        </div>
    );
};

export default MyCabinet;




// import React from 'react';

// const files = [
    
    
//     {
//         name: 'test.mp3',
//         type: 'audio/mp3',
//         size: '40mb'
//     }
// ]
// const Cabinet = ({user, fileType, upload}) => {
//     console.log(user.val.image)
//     const images = Object.values(user.val.image)
//     const videos = Object.values(user.val.video)
//     const music = Object.values(user.val.music)
//     const docs = Object.values(user.val.docs)
//     const others = Object.values(user.val.others)
//     return (
//         <div className="cabinet page">
//             <h2>{fileType} files</h2>
//             <div className="layout">
//                 {
//                     fileType === 'image'?
//                     images.map(e=>{
//                         return<div>
//                                 <img src={e}/>
//                         </div>      
//                     }):
//                     fileType === 'video'?
//                     videos.map(e=>{
//                         return<div>
//                                 <video controls>
//                                     <source src={e}/>
//                                 </video>
//                         </div>      
//                     }):
//                     fileType === 'music'?
//                     music.map(e=>{
//                         return<div>
//                                 <audio>
//                                     <source src={e}/>
//                                 </audio>
//                         </div>      
//                     }):
//                     fileType === 'docs'?
//                     docs.map(e=>{
//                         return<div>
//                             <a href={e}>v</a>
//                         </div>      
//                     }):
//                     fileType === 'others'?
//                     others.map(e=>{
//                         return<div>
//                                 <a href={e}>v</a>
//                         </div>      
//                     }):null

//                 }
                
//             </div>
//             <div className="cta">
//                 <h3>Upload a new file</h3>
//                 <label className="cta-btn" for="upload">↑ Upload</label>
//                 <input id="upload" style={{display: 'none'}}  onChange={(e)=>upload(e)} type="file"/>
//             </div>
//         </div>
//     );
// };

// export default Cabinet;