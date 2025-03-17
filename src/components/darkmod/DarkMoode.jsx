import '../darkmod/darkMoode.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'


const DarkMoode = () => {
    const DarkHandle=()=>{
document.querySelector('body').classList.toggle('darkmood');
    }
  return (
    <div className='dark-mood-icon'>
      <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandle}/>
    </div>
  )
}

export default DarkMoode

