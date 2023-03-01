import React from 'react'
import Img from '@/templates/Img'

function About({ about }) {
  return (
    <section className='bg-light text-dark'>
      <div className='section-container items-center justify-center lg:justify-between'>
        <div className='lg:w-1/2'>
          <h2 className='text-center lg:text-left mb-6'>{about.title}</h2>
          <p className='text-center lg:text-left'>{about.description}</p>
        </div>
        <div className='relative hidden lg:block h-80 w-[35rem] rounded'>
          <Img source={about} role='presentation' altValue='' classes='rounded shadow-md' />
        </div>
      </div>
    </section>
  )
}

export default About
