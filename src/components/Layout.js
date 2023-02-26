import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
  return (
    <div className='h-full min-h-max flex flex-col'>
      <Header />
      <main className='flex-grow relative'>{children}</main>
      <Footer className='mt-auto' />
    </div>
  )
}

export default Layout
