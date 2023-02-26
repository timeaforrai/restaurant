import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'

function About({ about }) {
  return (
    <section className='bg-light text-dark'>
      <div className='section-container items-center justify-center lg:justify-between'>
        <div className='lg:w-1/2'>
          <h2 className='text-center lg:text-left mb-6'>{about.title}</h2>
          <p className='text-center lg:text-left'>{about.description}</p>
        </div>
        <div className='relative hidden lg:block h-80 w-[35rem] rounded'>
          <Image
            src={urlFor(about.image).url()}
            fill
            sizes='100%'
            role='presentation'
            alt=''
            className='object-cover rounded shadow-md'
          />
        </div>
      </div>
    </section>
  )
}

export default About
