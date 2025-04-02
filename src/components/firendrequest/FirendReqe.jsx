import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../firendrequest/firendReqe.css'
import FirendReqData from '../../FackApis/FirendReqData'

export default function FriendRequest() {
  const [requests, setRequests] = useState(FirendReqData);

  const handleAccept = (id) => {
   
    setRequests(requests.filter(request => request.id !== id));
  };

  const handleDelete = (id) => {
   
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="Friend-Requests">
      <h4>Friend Requests</h4>
      {requests.length > 0 ? (
        requests.map((friend) => (
          <div className="request" key={friend.id}>
            <Link to={`/profile/${friend.id}`}>
              <div className="info">
                <div className="user">
                  <img src={friend.img} alt={friend.name} />
                  <h5>{friend.name}</h5>
                </div>
                <div className="info-name">
                  <p>{friend.info}</p>
                </div>
              </div>
            </Link>
            <div className="action">
              <button className="btn btn-primary" onClick={() => handleAccept(friend.id)}>Accept</button>
              <button className="btn btn-red" onClick={() => handleDelete(friend.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>No pending friend requests.</p>
      )}
    </div>
  );
}
