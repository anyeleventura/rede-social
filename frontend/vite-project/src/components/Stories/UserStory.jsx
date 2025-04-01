import React from 'react'
import './Stories.css'

import CurrentUserData from '../../FakeApis/CurrentUserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export default function UserStory() {
  return (
    <div className='story userStory'>
        <div className="user">
            <img 
                src={CurrentUserData.map (user => (user.ProfileImage))}
                alt="Perfil do Usuário" 
            />
        </div>

            <img 
                src={CurrentUserData.map (user => (user.CoverPhoto))}
                alt="Stories" 
            />
            <label htmlFor="storyFiles">
                <FontAwesomeIcon icon={faAdd} />
                <input type="file" id='storyFiles' />
            </label>
            <h5>Adicionar ao Story</h5>
    </div>
  )
}
