import React from 'react'
import Img from '@/templates/Img'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'

function Events({ events }) {
  return (
    <section id='events' className='bg-light text-dark'>
      <div className='section-container flex-col items-center '>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper w-full h-56 md:h-80 lg:h-[28rem] lg:w-3/4 shadow-md'>
          {events.map((event, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide'>
                <Img source={event} altValue={event.name} className='-z-10 rounded' />
                <div className='event-polygon '>
                  <h2 className='text-2xl lg:text-5xl max-w-[70%]'>{event.name}</h2>
                  <p className='text-center lg:text-lg max-w-[70%]'>{event.date}</p>
                  <p className='before:content-["_📍"] before:mr-2 text-center lg:text-lg max-w-[70%]'>{event.location}</p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Events
