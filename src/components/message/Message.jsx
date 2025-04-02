import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit } from '@fortawesome/free-solid-svg-icons';
import MessageData from '../../FackApis/MessageData';
import '../message/message.css';

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setMessages(MessageData);
  }, []);

  const filteredMessages = messages.filter((mess) =>
    mess.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mess.mText.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='Message'>
      <div className='message-top'>
        <h4>Message</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>

      <div className='message-search'>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type='search'
          placeholder='Search Message'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='border-div'></div>

      {filteredMessages.length > 0 ? (
        filteredMessages.map((mess) => (
          <Link to={`/chatbox/${mess.id}`} key={mess.id} className='message-link'>
            <div className='message'>
              <div className='user-container'>
                <img src={mess.img} alt={mess.name} className='user-img' />
                <div className='green-active'></div>
              </div>
              <div className='message-body'>
                <h5>{mess.name}</h5>
                <p>{mess.mText}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className='no-message'>No messages found</p>
      )}
    </div>
  );
}
