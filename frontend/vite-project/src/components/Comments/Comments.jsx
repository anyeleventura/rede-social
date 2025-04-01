import React from 'react'
import './Comments.css'

import { Link } from 'react-router-dom'

import CommentData from '../../FakeApis/CommetData'
import CurrentUserData from '../../FakeApis/CurrentUserData'

export default function Comments() {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action="#">
                <div className="user">
                    <img src={CurrentUserData.map (user => (user.ProfileImage))} alt="" />
                    <input type="text" placeholder='Escreva um Comentário' />
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </div>

        {CommentData.map (comment => (
            <Link to='/profile/id' key={comment.id}>
                <div className="user">
                    <img src={comment.commentProfile} alt="" />
                    <div>
                        <h5>{comment.name}</h5>
                        <p>{comment.commentText}</p>
                    </div>

                    <small>1h</small>
                </div>
            </Link>
        ))}
    </div>
  )
}
