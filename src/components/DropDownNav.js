import React, { useState } from 'react'
import Link from 'next/link'
import { HiChevronDown } from 'react-icons/hi2'

const SubLink = ({ route, name, setNavOpen, setSubNavOpen }) => {
  return (
    <li className='lg:hover:text-light'>
      <Link
        href={route}
        onClick={() => {
          setNavOpen(false), setSubNavOpen(false)
        }}
      >
        {name}
      </Link>
    </li>
  )
}

function DropDownNav({ setNavOpen }) {
  const [subNavOpen, setSubNavOpen] = useState(false)

  return (
    <li className='group relative cursor-pointer' onClick={() => setSubNavOpen(!subNavOpen)}>
      <div className='nav-link group-hover:text-light'>
        Послуги <HiChevronDown className='inline-block' />
        <div className='animated-border top-0 left-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border top-0 left-0 w-[1px] h-0 group-hover:h-full' />
        <div className='animated-border bottom-0 right-0 w-0 h-[1px] group-hover:w-full' />
        <div className='animated-border bottom-0 right-0 w-[1px] h-0 group-hover:h-full' />
      </div>
      <ul className={`${!subNavOpen ? 'hidden' : 'p-4 flex flex-col gap-4 lg:absolute lg:top-12 lg:bg-dark lg:shadow-md'}`}>
        <SubLink route='/celebration' name='Святкування' setNavOpen={setNavOpen} setSubNavOpen={setSubNavOpen} />
        <SubLink route='/business' name='Бізнес' setNavOpen={setNavOpen} setSubNavOpen={setSubNavOpen} />
        <SubLink route='/restaurant' name='Ресторан' setNavOpen={setNavOpen} setSubNavOpen={setSubNavOpen} />
      </ul>
    </li>
  )
}

export default DropDownNav
