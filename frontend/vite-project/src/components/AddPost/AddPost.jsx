import React from 'react'
import './AddPost.css'

import CurrentUserData from '../..//FakeApis/CurrentUserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function AddPost() {
  return (
    <form className='postForm'>
      <div className="user form-top">
        <img src={CurrentUserData.map (user => (user.ProfileImage))} alt="" />
        <input type="text" placeholder='O que se passa em sua mente?' />
        <button type='submit' className='btn btn-primary'>Postar</button>
      </div>

      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id='file' />
          <span><FontAwesomeIcon icon={faImage} />Fotos</span>
        </label>
        <label htmlFor="file">
          <input type="file" id='file' />
          <span><FontAwesomeIcon icon={faVideo} />Video</span>
        </label>

          <span><FontAwesomeIcon icon={faTags} />Hashtags</span>
          <span><FontAwesomeIcon icon={faSmile} />Sentimentos</span>
      </div>
    </form>
  )
}
