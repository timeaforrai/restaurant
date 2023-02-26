import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
import Link from 'next/link'

const LinkImage = ({ url, route, name, classes }) => {
  return (
    <Link className={`image-link-container group ${classes}`} href={route} target='_blank'>
      <Image src={url} alt={name} fill sizes='100%' className='link-image' placeholder='blur' blurDataURL={url} />
      <div className='image-link'>
        <div className='animated-border top-0 left-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border top-0 left-0 w-[1px] h-0 group-hover:h-full' />
        <div className='animated-border bottom-0 right-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border bottom-0 right-0 w-[1px] h-0 group-hover:h-full' />
        {name}
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
            url={urlFor(service.drinks.image).url()}
            route='/restaurant'
            name={service.drinks.title}
            classes='col-start-1 row-start-1 row-span-2 md:row-span-5 md:col-span-2 md:mt-4'
          />
          <LinkImage
            url={urlFor(service.food.image).url()}
            route='/restaurant'
            name={service.food.title}
            classes='col-start-2 row-start-1 md:col-start-3 md:row-span-2'
          />
          <LinkImage
            url={urlFor(service.takeaway.image).url()}
            route='/restaurant'
            name={service.takeaway.title}
            classes='col-start-1 row-start-3 md:col-start-3 md:row-span-3'
          />
          <LinkImage
            url={urlFor(service.celebration.image).url()}
            route='/celebration'
            name={service.celebration.title}
            classes='col-start-2 row-start-2 row-span-2 md:col-start-4 md:row-start-1 md:row-span-3'
          />
          <LinkImage
            url={urlFor(service.business.image).url()}
            route='/business'
            name={service.business.title}
            classes='col-start-1 row-start-4 col-span-2 md:col-start-4 row-start-4 row-span-2'
          />
        </div>
      </div>
    </section>
  )
}

export default HomeServices
