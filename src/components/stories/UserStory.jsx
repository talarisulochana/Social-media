import '../Stories/stories.css'
import CurrentUserData from '../../FackApis/CurrentUserData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  
  const currentUser = CurrentUserData[0]; 

  return (
    <div className="story userStory">
      <div className="user">
        <img src={currentUser.ProfieImage} alt="Profile" />
      </div>
      <img src={currentUser.CoverPhoto} alt="Cover" />
      <label htmlFor="storyFiles">
        <FontAwesomeIcon icon={faAdd} />
        <input type="file" id="storyFiles" />
      </label>
      <h5>Add Story</h5>
    </div>
  )
}
