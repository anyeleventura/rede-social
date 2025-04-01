import React from 'react'
import { useState } from 'react'
import './Feeds.css'

import { Link } from 'react-router-dom'

import Comments from '../Comments/Comments'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

export default function Feed ({ feed }) {
    let [openComment, setOpenComment] = useState (false)

    const CommentHandeler = () => {
        setOpenComment (!openComment)
    }

  return (
    <div className='feed' key={feed.id}>
        <div className="top-content">
            <Link to='/profile/id'>
                <div className="user">
                    <img src={feed.feedProfile} alt="" />

                    <div>
                        <h5>{feed.name}</h5>
                        <small>1 Minuto atrás</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots} /></span>
        </div>

        <div className="mid-content">
            <p>{feed.desc}</p>
            <img src={feed.feedImage} alt="" />
        </div>

        <div className="bottom-content">
            <div className="action-item">
                <span><FontAwesomeIcon icon={faHeart} /> 14 Curtidas</span>
            </div>
            <div className="action-item" onClick={CommentHandeler}>
                <span><FontAwesomeIcon icon={faComment} /> 10 Comentários</span>
            </div>
            <div className="action-item">
                <span><FontAwesomeIcon icon={faShare} /> 7 Compartilhamentos</span>
            </div>
        </div>

        {openComment && <Comments />}
    </div>
  )
}
