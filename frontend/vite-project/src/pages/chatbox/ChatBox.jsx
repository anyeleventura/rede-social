import React from 'react'
import './ChatBox.css'

import Stories from '../../components/Stories/Stories'

import CurrentUserData from '../../FakeApis/CurrentUserData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function ChatBox() {
  return (
    <>
      <Stories />

      <div className="chat-box">
        <div className="chat-box-top">
          <img src={CurrentUserData.map (user => (user.ProfileImage))} alt="" />

          <div className="user-name">
            <h3>{CurrentUserData.map (user => (user.name))}</h3>
            <h5>{CurrentUserData.map (user => (user.username))}</h5>
          </div>
        </div>

        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder='Escreva alguma coisa...' />
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>

            <label htmlFor="FileAlt">
              <input type="file" id='FileAlt' />
              <FontAwesomeIcon icon={faFileAlt} />
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

