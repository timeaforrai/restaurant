import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'
import logo from '../../public/images/logo_small.png'
import Link from 'next/link'
import Navigation from './Navigation'

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null)

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection) // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
    }
    updateScrollDirection()
  }, [scrollDirection])

  return scrollDirection
}

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`fixed w-full bg-dark px-4 shadow-md z-10 lg:text-lg font-body transition-all duration-500 ${
        scrollDirection === 'down' ? '-top-14' : 'top-0'
      }`}
    >
      <div className='section-container py-0 h-14 items-center justify-between'>
        <Link href='/' className='relative h-8 w-20 md:h-10 md:w-28 cursor-pointer' onClick={() => setNavOpen(false)}>
          <Image src={logo} alt='home' sizes='100%' fill loading='eager' className='object-cover' />
        </Link>
        <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className='flex items-center gap-2'>
          <div className='lg:hidden' onClick={() => setNavOpen(!navOpen)}>
            <HiBars3 className='icon' />
          </div>
          <div className='w-[1px] h-6 mx-4 bg-slate-100' />
          <Link href='https://www.facebook.com/profile.php?id=100083869764645' target='_blank' title='facebook icon'>
            <MdOutlineFacebook className='icon mr-2 hover:text-light' />
          </Link>
          <Link href='https://www.instagram.com/115kitchen_and_bar' target='_blank' title='instagramm icon'>
            <AiFillInstagram className='icon hover:text-light' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
