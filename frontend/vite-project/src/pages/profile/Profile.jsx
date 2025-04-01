import React from 'react'

import UserProfile from '../../components/UserProfile/UserProfile'
import AddPost from '../../components/AddPost/AddPost'
import Feeds from '../../components/Feeds/Feeds'

export default function Profile() {
  return (
    <>
      <UserProfile />
      <AddPost />
      <Feeds />
    </>
  )
}
