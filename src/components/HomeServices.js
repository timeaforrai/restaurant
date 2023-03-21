import React from 'react'
import Link from 'next/link'
import Img from '@/templates/Img'

const LinkImage = ({ source, route, classes }) => {
  return (
    <Link className={`image-link-container group ${classes}`} href={route}>
      <Img source={source} altValue={source.title} fill sizes='100%' classes='link-image' />
      <div className='image-link'>
        <div className='animated-border top-0 left-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border top-0 left-0 w-[1px] h-0 group-hover:h-full' />
        <div className='animated-border bottom-0 right-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border bottom-0 right-0 w-[1px] h-0 group-hover:h-full' />
        {source.title}
      </div>
    </Link>
  )
}

function HomeServices({ services }) {
  const service = services.services
  return (
    <section>
      <div className='section-container flex-col'>
        <h2 className='mb-6'>{services.title}</h2>
        <div className='services-container'>
          <LinkImage
            source={service.drinks}
            route='/restaurant'
            classes='col-start-1 row-start-1 row-span-2 md:row-span-5 md:col-span-2 md:mt-4'
          />
          <LinkImage source={service.food} route='/restaurant' classes='col-start-2 row-start-1 md:col-start-3 md:row-span-2' />
          <LinkImage
            source={service.takeaway}
            route='/restaurant'
            classes='col-start-1 row-start-3 md:col-start-3 md:row-span-3'
          />
          <LinkImage
            source={service.celebration}
            route='/celebration'
            classes='col-start-2 row-start-2 row-span-2 md:col-start-4 md:row-start-1 md:row-span-3'
          />
          <LinkImage
            source={service.business}
            route='/business'
            classes='col-start-1 row-start-4 col-span-2 md:col-start-4 row-start-4 row-span-2'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeServices
