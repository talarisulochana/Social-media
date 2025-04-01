// import { Link } from 'react-router-dom'
// import '../leftbar/leftBar.css'
// import CurrentUser from '../../FackApis/CurrentUserData'
// import Friend from '../../assets/icon/1.png'
// import Groups from '../../assets/icon/2.png'
// import Market from '../../assets/icon/3.png'
// import Watch from '../../assets/icon/4.png'
// import Gallery from '../../assets/icon/5.png'
// import Videos from '../../assets/icon/6.png'
// import Message from '../../assets/icon/7.png'

// export default function LeftBar(){
//     return(
//         <div className='leftBar'>
// <div className="left-container">
//     <div className="menu">
//         <Link to='/profile/id'>
//         <div className="user">
//             <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
//             <h4>Sri Ram</h4>
//         </div>
       
//         </Link>


// <Link to='/'>
// <div className="item">
// <img src={Friend} alt="" />
// <h4>Friends</h4>
// </div>
// </Link>

// <Link to='/'>
// <div className="item">
// <img src={Groups} alt="" />
// <h4>Groups</h4>
// </div>
// </Link>

// <Link to='/'>
// <div className="item">
// <img src={Market} alt="" />
// <h4>Market</h4>
// </div>
// </Link>

// <Link to='/'>
// <div className="item">
// <img src={Watch} alt="" />
// <h4>Watch</h4>
// </div>
// </Link>
//     </div>
//     <hr/>

//     <div className="menu">
// <h4 className='others'>Your Shortcuts</h4>

// <Link to='/'>
// <div className="item">
// <img src={Gallery} alt="" />
// <h4>Gallery</h4>
// </div>
// </Link>

// <Link to='/'>
// <div className="item">
// <img src={Videos} alt="" />
// <h4>Videos</h4>
// </div>
// </Link>

// <Link to='/chatbox/id'>
// <div className="item">
// <img src={Message} alt="" />
// <h4>Message</h4>
// </div>
// </Link>

//     </div>
// </div>
//         </div>
//     )
// }

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../leftbar/leftBar.css';
import CurrentUser from '../../FackApis/CurrentUserData';
import Friend from '../../assets/icon/1.png';
import Groups from '../../assets/icon/2.png';
import Market from '../../assets/icon/3.png';
import Watch from '../../assets/icon/4.png';
import Gallery from '../../assets/icon/5.png';
import Videos from '../../assets/icon/6.png';
import Message from '../../assets/icon/7.png';

export default function LeftBar() {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false); 

  const videoInputRef = useRef(null);
  const imageInputRef = useRef(null);


  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const handleFileUpload = (e, isImage) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('File size should not exceed 5MB');
        return;
      }

      setIsUploading(true);
      const fileURL = URL.createObjectURL(file);

      if (isImage) {
        setUploadedImages((prevImages) => {
          const updatedImages = [...prevImages, fileURL];
          localStorage.setItem('uploadedImages', JSON.stringify(updatedImages));
          return updatedImages;
        });
      } else {
        setUploadedVideos((prevVideos) => {
          const updatedVideos = [...prevVideos, fileURL];
          localStorage.setItem('uploadedVideos', JSON.stringify(updatedVideos));
          return updatedVideos;
        });
      }
      setIsUploading(false);
    }
  };


  const menuItems = [
    { to: '/profile/id', img: CurrentUser[0]?.ProfieImage, label: 'Profile', name: 'Sri Ram' },
    { to: '/', img: Friend, label: 'Friends' },
    { to: '/', img: Groups, label: 'Groups' },
    { to: '/', img: Market, label: 'Market' },
    { to: '/', img: Watch, label: 'Watch' },
  ];


  const shortcutItems = [
    { to: '/', img: Gallery, label: 'Gallery', uploadHandler: (e) => handleFileUpload(e, true), uploadedContent: uploadedImages, inputRef: imageInputRef },
    { to: '/', img: Videos, label: 'Videos', uploadHandler: (e) => handleFileUpload(e, false), uploadedContent: uploadedVideos, inputRef: videoInputRef },
    { to: '/chatbox/id', img: Message, label: 'Messages' }
  ];

  const handleIconClick = (inputRef) => {
    inputRef.current.click();
  };


  useEffect(() => {
    const storedVideos = localStorage.getItem('uploadedVideos');
    const storedImages = localStorage.getItem('uploadedImages');

    if (storedVideos) {
      setUploadedVideos(JSON.parse(storedVideos));
    }
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.to}>
              <div className="item">
                {item.img && <img src={item.img} alt={item.label} />}
                <h4>{item.name || item.label}</h4>
              </div>
            </Link>
          ))}
        </div>

        <hr />

        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
          {shortcutItems.map((item, index) => (
            <div key={index} className="item">
              <Link to={item.to} onClick={(e) => e.preventDefault()}>
                <img
                  src={item.img}
                  alt={item.label}
                  onClick={() => handleIconClick(item.inputRef)}
                />
                <h4>{item.label}</h4>
              </Link>

              <input
                type="file"
                accept={item.label === 'Gallery' ? 'image/*' : 'video/*'}
                onChange={item.uploadHandler}
                className="uploadInput"
                ref={item.inputRef}
                style={{ display: 'none' }}
              />

              {item.uploadedContent && item.uploadedContent.length > 0 && (
                <div className="uploadedContent">
                  {item.label === 'Gallery' &&
                    item.uploadedContent.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Uploaded ${item.label}`}
                        style={{ width: '80px', margin: '5px' }}
                      />
                    ))}
                  {item.label === 'Videos' &&
                    item.uploadedContent.map((video, idx) => (
                      <video key={idx} width="80" controls>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                </div>
              )}

              {isUploading && <p>Uploading...</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
