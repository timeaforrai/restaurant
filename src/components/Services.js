import Img from '@/templates/Img'
import TextLink from '@/templates/TextLink'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'

function Services({ services, linkUrl, linkName }) {
  return (
    <div>
      {services.map((service, index) => {
        return (
          <section key={index} className='group even:bg-light even:text-dark'>
            <div className='section-container items-center flex-col justify-center gap-12 md:gap-12 lg:flex-row lg:justify-between lg:min-h-[40rem]'>
              <div className='flex flex-col items-center lg:items-start lg:w-1/2 lg:group-odd:order-2'>
                <h2 className='mb-6'>{service.title}</h2>
                <div className='h-[1px] w-24 bg-orange group-even:bg-orange-dark mb-6' />
                <p className='text-center lg:text-start'>{service.description}</p>
                <TextLink
                  route={linkUrl}
                  name={linkName}
                  classes='text-orange hover:text-orange-dark group-even:text-orange-dark hover:group-even:text-orange'
                />
              </div>
              <div className=' w-full lg:w-1/2 flex items-center justify-start group-even:justify-end'>
                <div className='relative w-full h-52 md:h-80 lg:w-[90%] rounded'>
                  <Img source={service} altValue='' classes='object-cover rounded shadow-md' role='presentation' />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Services
