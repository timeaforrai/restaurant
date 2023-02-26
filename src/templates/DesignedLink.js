import Link from 'next/link'
import React from 'react'

function DesignedLink({ route, name, setNavOpen }) {
  return (
    <li className='nav-link group lg:hover:text-light'>
      <div className='animated-border top-0 left-0 w-0 h-[1px] group-hover:w-full' />
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

export default DesignedLink
