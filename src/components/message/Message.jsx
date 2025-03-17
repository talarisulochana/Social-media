import '../message/message.css'
import { Link } from 'react-router-dom'

import MessageData from '../../FackApis/MessageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faEdit } from '@fortawesome/free-solid-svg-icons'
export default function Message() {
  return (
    <div className='Message'>
      <div className='message-top'>
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit}/>
      </div>
<div className="message-search">
  <FontAwesomeIcon icon={faSearch}/>
  <input type='search' placeholder='search Message'/>
</div>
<div className="border-div">
  {
   MessageData.map(mess=>(
    <Link to='/chatbox/id'>
      <div className="message" key={mess.id}>
        <div className="user">
          <img src={mess.img} alt=''/>
          <div className="green-active"></div>
          <div className="message-body">
            <h5>{mess.name}</h5>
            <p>{mess.mText}</p>
          </div>
        </div>
      </div>
    </Link>
   )) 
  }
</div>
    </div>
  )
}
