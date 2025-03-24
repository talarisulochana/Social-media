import './feeds.css'

import Feed from '../feeds/Feed'

import HomeFeedData from '../../FackApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
      {
        HomeFeedData.map(fed=>(
            <Feed fed={fed} key={fed.userid}/>
        ))
      }
    </div>
  )
}



