import { Link } from 'react-router-dom'
import CurrentUser from '../../FackApis/CurrentUserData'
import DarkMoode  from '../darkmod/DarkMoode'
import "../nav/nav.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faHome, faSearch, faUser,faBell } from '@fortawesome/free-solid-svg-icons'


export default function Nav(){
    return(
        <nav>
            <div className="nav-container">
              <div className="nav-left">
        <Link to='/'>
        <h3 className='logo'>Social-X</h3>
        </Link>
        <Link to='/'>
        <FontAwesomeIcon icon={faHome}/>
        </Link>
        <Link to='/profile/id'>
        <FontAwesomeIcon icon={faUser}/>
        </Link>
        <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="search" />
        </div>
                </div>  
                <div className="nav-right">
                <Link to='/chatbox/id'>
                <FontAwesomeIcon icon={faEnvelope}/>
                </Link>

                <Link to='/'>
                <FontAwesomeIcon icon={faBell}/>
                </Link>
<DarkMoode/>
                <Link to='/'>
                <FontAwesomeIcon icon={faBars}/>
                </Link>

<div className="user">
    <img src={CurrentUser.map(user=>(user.ProfieImage))}  alt="" />
    <h4>Sri Ram</h4>
</div>
                </div>  

            </div>
        </nav>
    )
}


