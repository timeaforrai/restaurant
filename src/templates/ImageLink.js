import React from 'react'
import Link from 'next/link'

function ImageLink({ route, name }) {
  return (
    <li className='nav-link z-10 lg:hidden lg:group-hover:flex lg:hover:text-light '>
      <div className='animated-border top-0 left-0 w-0 h-[1px] group-hover:w-full delay-300' />
      <div className='animated-border top-0 left-0 w-[1px] h-0 group-hover:h-full' />
      <div className='animated-border bottom-0 right-0 w-0 h-[1px] group-hover:w-full' />
      <div className='animated-border bottom-0 right-0 w-[1px] h-0 group-hover:h-full' />
      <Link
        href={route}
        onClick={() => {
          setNavOpen(false)
        }}
      >
        {name}
      </Link>
    </li>
  )
}

export default ImageLink
