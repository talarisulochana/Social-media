import '../firendrequest/firendReqe.css'
import { Link } from 'react-router-dom';
import FirendReqData from '../../FackApis/FirendReqData'

export default function FriendRequest() {
  return (
    <div className="Friend-Requests">
      <h4>Friend Requests</h4>
      {FirendReqData.map((firend) => (
        <div className="request" key={firend.id}>
          <Link to={`/profile/${firend.id}`}>
            <div className="info">
              <div className="user">
                <img src={firend.img} alt={firend.name} />
                <h5>{firend.name}</h5>
              </div>
              <div className="info-name">
                <p>{firend.info}</p>
              </div>
            </div>
          </Link>
          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
