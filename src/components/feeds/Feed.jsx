import './feeds.css';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faEllipsisH, faShare } from '@fortawesome/free-solid-svg-icons';

export default function Feed({ fed }) {
  return (
    <div className="feed">
      
      <div className="top-content">
        <Link to={`/profile/${fed.userid}`} className="user">
          <img src={fed.feedProfile} alt="User Profile" />
          <div>
            <h5>{fed.name}</h5>
            <small>1 Minute Ago</small>
          </div>
        </Link>
        <span className="menu-icon"><FontAwesomeIcon icon={faEllipsisH} /></span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        {fed.feedImage && <img src={fed.feedImage} alt="Feed" />}
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <FontAwesomeIcon icon={faHeart} /> <span>14 Likes</span>
        </div>
        <div className="action-item">
          <FontAwesomeIcon icon={faComment} /> <span>2 Comments</span>
        </div>
        <div className="action-item">
          <FontAwesomeIcon icon={faShare} /> <span>1 Share</span>
        </div>
      </div>
      <Comments />
    </div>
  );
}


