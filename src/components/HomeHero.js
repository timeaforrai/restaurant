import React from 'react'
import Link from 'next/link'
import Img from '@/templates/Img'

function HomeHero({ showcase }) {
  return (
    <section className='relative h-800px md:h-screen isolate bg-dark'>
      <Img source={showcase} altValue='bar' classes='-z-20 opacity-30' priority />
      <div className='section-container h-full flex-col items-center justify-center gap-4'>
        <h1>{showcase.name}</h1>
        <p className='text-center lg:text-lg'>{showcase.description}</p>
        <div className='flex gap-6 lg:gap-10 mt-8'>
          <Link className='bg-light text-dark hover:bg-light-hover button-link ' href='#contact'>
            Контакт
          </Link>
          <Link
            className=' bg-dark-hover text-slate-100 hover:bg-gray-700 button-link '
            href='https://115.choiceqr.com/online-menu'
            target='_blank'
          >
            Меню
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
