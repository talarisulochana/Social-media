// import '../addPost/addPost.css'

// import CurrentUserData from '../../FackApis/CurrentUserData'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'


// export default function AddPost() {
//   return (
//     <form className='postForm'>
//         <div className="user form-top">
//             <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
//             <input type="text"  placeholder="What's on your mind ?"/>
//             <button type='submit 'className='btn btn-primary'>Post</button>
//         </div>
// <div className="post-categories">
//     <label htmlFor="file">
//         <input type="file"  id='file'/>
//         <span><FontAwesomeIcon icon={faImage}/>Photos</span>
//     </label>

//     <label htmlFor="file">
//         <input type="file"  id='file'/>
//         <span><FontAwesomeIcon icon={faVideo}/>Videos</span>
//     </label>
//     <span><FontAwesomeIcon icon={faTags}/>Tags</span>
//     <span><FontAwesomeIcon icon={faSmile}/>Feelings</span>
// </div>

//     </form>
//   )
// }


import React, { useState } from 'react';
import '../addPost/addPost.css';

import CurrentUserData from '../../FackApis/CurrentUserData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function AddPost() {
  const [postText, setPostText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const currentUser = CurrentUserData[0]; 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      userId: currentUser.id,
      text: postText,
      file: selectedFile,
      timestamp: new Date().toISOString(),
    };

    console.log("Post Submitted:", newPost);
    
    setPostText('');
    setSelectedFile(null);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <form className='postForm' onSubmit={handleSubmit}>
      <div className="user form-top">
        <img src={currentUser.ProfieImage} alt="User" />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>Post</button>
      </div>

      <div className="post-categories">
        <label htmlFor="photoUpload">
          <input type="file" id="photoUpload" onChange={handleFileChange} hidden />
          <span><FontAwesomeIcon icon={faImage} /> Photos</span>
        </label>

        <label htmlFor="videoUpload">
          <input type="file" id="videoUpload" onChange={handleFileChange} hidden />
          <span><FontAwesomeIcon icon={faVideo} /> Videos</span>
        </label>

        <span><FontAwesomeIcon icon={faTags} /> Tags</span>
        <span><FontAwesomeIcon icon={faSmile} /> Feelings</span>
      </div>
    </form>
  );
}
