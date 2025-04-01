import React from 'react'

import Stories from '../../components/Stories/Stories'
import AddPost from '../../components/AddPost/AddPost'
import Feeds from '../../components/Feeds/Feeds'

export default function Home() {
  return (
    <>
      <Stories />
      <AddPost />
      <Feeds />
    </>
  )
}
