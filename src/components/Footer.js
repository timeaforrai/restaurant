import React from 'react'
import Link from 'next/link'
import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer className='mt-auto px-4'>
      <div className='w-full max-w-7xl py-4 m-auto flex justify-between items-center'>
        <p className='w-max text-sm md:text-base'>115 Kitchen & bar</p>
        <Link href='/privacy-policy' className='text-xs md:text-sm'>
          privacy policy
        </Link>
        <div className='flex items-center gap-2'>
          <Link href='https://www.facebook.com/profile.php?id=100083869764645' target='_blank' title='facebook icon'>
            <MdOutlineFacebook className='icon mr-2 hover:text-light' />
          </Link>
          <Link href='https://www.instagram.com/115kitchen_and_bar' target='_blank' title='instagramm icon'>
            <AiFillInstagram className='icon hover:text-light' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
