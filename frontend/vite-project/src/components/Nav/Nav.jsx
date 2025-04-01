import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

import CurrentUser from '../../FakeApis/CurrentUserData'
import DarkMod from '../DarkMod/DarkMod'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faEnvelope, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
        <div className="nav-container">
            <div className="nav-left">
                <Link to="/">
                    <h3 className='logo'>FriendsGUI</h3>
                </Link>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/profile/id">
                    <FontAwesomeIcon icon={faUser} />
                </Link>

                <div className="nav-searchbar">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="search" />
                </div>
            </div>

            <div className="nav-right">
                <Link to="/chatbox/id">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link to="/">
                    <FontAwesomeIcon icon={faBell} />
                </Link>

                <DarkMod />

                <Link to="/">
                    <FontAwesomeIcon icon={faBars} />
                </Link>

                <div className="user">
                    <img 
                        src={CurrentUser.map (user => (user.ProfileImage))} 
                        alt=""
                    />
                    <h4>Beg Joker</h4>
                </div>
            </div>
        </div>
    </nav>
  )
}
