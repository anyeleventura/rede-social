import React from 'react'
import './FriendRequest.css'

import { Link } from 'react-router-dom'

import FriendRequestData from '../../FakeApis/FirendReqData'

export default function FriendRequest() {
  return (
    <div className='friend-requests'>
      <h4>Pedidos de Amizade</h4>

      {
        FriendRequestData.map (friend => (
          <div className="request">
            <Link to='/profile/id'>
              <div className="info" key={friend.id}>
                <div className="user">
                  <img src={friend.img} alt="" />
                  <h5>{friend.name}</h5>
                </div>

                <div className="info-name">
                  <p>{friend.info}</p>
                </div>
              </div>
            </Link>

            <div className="action">
              <button className='btn btn-primary'>Aceitar</button>
              <button className='btn btn-red'>Recusar</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}
