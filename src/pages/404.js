import TextLink from '@/templates/TextLink'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20'>
      <h1 className='mb-4 text-8xl'>Hoops...</h1>
      <p>будь ласка, спробуйте ще раз</p>

      <TextLink route='/' name='повернутися на головну сторінку' classes='ml-6 text-blue-600 hover:text-blue-400' />
    </div>
  )
}
