import React from 'react'
import './Feeds.css'

import Feed from './Feed'

import HomeFeedData from '../../FakeApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
        {HomeFeedData.map (feed => (
            <Feed feed={feed} key={feed.key} />
        ))}
    </div>
  )
}
