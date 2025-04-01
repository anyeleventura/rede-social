import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Login from '../pages/login/Login'
import SignUp from '../pages/signup/SignUp'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'

import Nav from '../components/Nav/Nav'
import LeftBar from '../components/LeftBar/LeftBar'
import RightBar from '../components/RightBar/RightBar'

function LayOut() {
    const Feed = () => {
        return (
            <>
                <Nav />
                <main>
                    <LeftBar />
                    <div className='contianer'>
                        <Outlet />
                    </div>
                    <RightBar />
                </main>
            </>
        )
    }

    const router = createBrowserRouter ([
        {
            path: '/',
            element: <Feed />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/profile/:id',
                    element: <Profile />
                },
                {
                    path: '/chatbox/:id',
                    element: <ChatBox />
                }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        }
    ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default LayOut