import React from 'react'
import './Stories.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import StoriesData from '../../FakeApis/StoriesData'

import UserStory from './UserStory'

export default function Stories() {
  return (
    <div className='stories'>
        <UserStory />

        <Swiper style={{ width: '80%' }}
            slidesPerView={4}
            spaceBetween={10}
        >
            {StoriesData.map ((story) => (
                <SwiperSlide key={story.id}>
                    <div className="story">
                        <div className="user">
                            <img src={story.storyProfile} alt="Perfil do Usuário" />
                        </div>
                        <img src={story.story} alt="Stories" />

                        <h5>{story.name}</h5>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
