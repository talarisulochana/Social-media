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
    { id: 1, name: 'Friends', icon: Friend, path: '/home' },
    { id: 2, name: 'Groups', icon: Groups, path: '/home' },
    { id: 3, name: 'Market', icon: Market, path: '/home' },
    { id: 4, name: 'Watch', icon: Watch, path: '/home' },
];

const shortcutItems = [
    { id: 5, name: 'Gallery', icon: Gallery, path: '/home' },
    { id: 6, name: 'Videos', icon: Videos, path: '/home' },
    { id: 7, name: 'Message', icon: Message, path: '/home/chatbox/id' },
];


export default function LeftBar() {
    const user = CurrentUser[0]; 

    return (
        <div className='leftBar'>
            <div className="left-container">
                <div className="menu">
                    <Link to={`/home/profile/${user?.id}`}>
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
