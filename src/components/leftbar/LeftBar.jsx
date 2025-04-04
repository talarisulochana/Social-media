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

const menuItems = [
    { id: 1, name: 'Friends', icon: Friend, path: '/' },
    { id: 2, name: 'Groups', icon: Groups, path: '/' },
    { id: 3, name: 'Market', icon: Market, path: '/' },
    { id: 4, name: 'Watch', icon: Watch, path: '/' },
];

const shortcutItems = [
    { id: 5, name: 'Gallery', icon: Gallery, path: '/' },
    { id: 6, name: 'Videos', icon: Videos, path: '/' },
    { id: 7, name: 'Message', icon: Message, path: '/chatbox/id' },
];

export default function LeftBar() {
    const user = CurrentUser[0]; 

    return (
        <div className='leftBar'>
            <div className="left-container">
                <div className="menu">
                    <Link to={`/profile/${user?.id}`}>
                        <div className="user">
                            <img src={user?.ProfieImage} alt="User Profile" />
                            <h4>{user?.name}</h4>
                        </div>
                    </Link>

                    {menuItems.map((item) => (
                        <Link to={item.path} key={item.id}>
                            <div className="item">
                                <img src={item.icon} alt={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
                <hr />

                <div className="menu">
                    <h4 className='others'>Your Shortcuts</h4>
                    {shortcutItems.map((item) => (
                        <Link to={item.path} key={item.id}>
                            <div className="item">
                                <img src={item.icon} alt={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
