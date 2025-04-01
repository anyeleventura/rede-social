import React from 'react'
import './LeftBar.css'
import { Link } from 'react-router-dom'

import CurrentUser from '../../FakeApis/CurrentUserData'

import Friends from '../../assets/icon/1.png'
import Groups from '../../assets/icon/2.png'
import Market from '../../assets/icon/3.png'
import Watch from '../../assets/icon/4.png'
import Gallery from '../../assets/icon/5.png'
import Videos from '../../assets/icon/6.png'
import Message from '../../assets/icon/7.png'

export default function LeftBar() {
  return (
    <div className='leftBar'>
        <div className="left-container">
            <div className="menu">
                <Link to='/profile/id'>
                    <div className="user">
                        <img 
                            src={CurrentUser.map (user => (user.ProfileImage))} 
                            alt="" 
                        />
                        <h4>Beg Joker</h4>
                    </div>
                </Link>

                <Link to='/'>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <h4>Amigos</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <h4>Grupos</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Market} alt="" />
                        <h4>Mercado</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <h4>Assistir</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <h4>Galeria</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <h4>Videos</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Message} alt="" />
                        <h4>Mensagens</h4>
                    </div>
                </Link>
            </div>

            <hr />

            <div className="menu">
                <div className="others">Seus Atalhos</div>

                <Link to='/'>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <h4>Galeria</h4>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <h4>Videos</h4>
                    </div>
                </Link>
                <Link to='/chatbox/id'>
                    <div className="item">
                        <img src={Message} alt="" />
                        <h4>Mensagens</h4>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
