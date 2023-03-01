import React from 'react'
import TextLink from '@/templates/TextLink'
import Img from '@/templates/Img'

function HomeGallery({ gallery }) {
  return (
    <section>
      <div className='section-container flex-col gap-12 lg:flex-row items-center lg:justify-between lg:min-h-[45rem]'>
        <div className=' flex flex-col items-center lg:items-start lg:w-2/5'>
          <h2 className='mb-4'>{gallery.title}</h2>
          <p className='text-center lg:text-left'>{gallery.description}</p>
          <TextLink route='/gallery' name='Галерея' classes='text-orange hover:text-orange-dark' />
        </div>
        <div className='w-full flex flex-wrap justify-center gap-4 lg:w-3/5 lg:justify-end'>
          {gallery.gallery.map((image, index) => {
            return (
              <div className='relative w-[47%] h-28 bg-white rounded md:w-1/4 md:h-32 lg:h-40' key={index}>
                <Img source={image} altValue={image.name} classes='rounded' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HomeGallery
