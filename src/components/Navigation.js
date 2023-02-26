import React, { useEffect, useState } from 'react'
import DesignedLink from '@/templates/DesignedLink'
import DropDownNav from './DropDownNav'

function Navigation({ navOpen, setNavOpen }) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleWindowSizeChange = () => {
      window.innerWidth < 1023 ? setIsMobile(true) : setIsMobile(false)
    }
    handleWindowSizeChange()

    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [setNavOpen])

  return (
    <nav className={`${navOpen || !isMobile ? 'navigation' : 'hidden'}`}>
      <ul className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-end'>
        <DropDownNav setNavOpen={setNavOpen} />
        <DesignedLink route='/gallery' name='Галерея' setNavOpen={setNavOpen} />
        <DesignedLink route='#events' name='Події' setNavOpen={setNavOpen} />
        <DesignedLink route='#contact' name='Контакти' setNavOpen={setNavOpen} />
      </ul>
    </nav>
  )
}

export default Navigation
