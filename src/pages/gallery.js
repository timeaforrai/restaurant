import React, { useState } from 'react'
import Image from 'next/image'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import { MdClose } from 'react-icons/md'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import backgroundImage from '../../public/images/115-kitchen.jpg'

export default function Gallery({ gallery, events, contact }) {
  const [selected, setSelected] = useState('all')
  const [openModal, setOpenModal] = useState(false)
  const [url, setUrl] = useState(backgroundImage)

  return (
    <div className='flex flex-col'>
      <section className='relative h-40 lg:h-80 w-full'>
        <Image src={backgroundImage} fill sizes='100%' role='presentation' alt='' className='object-cover rounded shadow-md' />
      </section>
      <section>
        <div className='section-container py-12 justify-between overflow-hidden flex-wrap'>
          <button
            className={`gallery-button ${selected === 'all' && 'text-orange border-orange'}`}
            onClick={() => setSelected('all')}
          >
            всі
          </button>
          <button
            className={`gallery-button ${selected === 'restaurant' && 'text-orange border-orange'}`}
            onClick={() => setSelected('restaurant')}
          >
            Ресторан
          </button>
          <button
            className={`gallery-button ${selected === 'celebration' && 'text-orange border-orange'}`}
            onClick={() => setSelected('celebration')}
          >
            Святкування
          </button>
          <button
            className={`gallery-button ${selected === 'business' && 'text-orange border-orange'}`}
            onClick={() => setSelected('business')}
          >
            Бізнес
          </button>
        </div>
      </section>
      <section>
        <div className='section-container py-12  flex-grow justify-center'>
          <div className='w-full h-max grid grid-cols-2 md:grid-cols-3 gap-4 flex-wrap'>
            {gallery.map((image, index) => {
              if (selected === image.category || selected === 'all') {
                return (
                  <div className='gallery-image-container' key={index}>
                    <Image
                      key={index}
                      src={urlFor(image.image).url()}
                      alt={image.name}
                      fill
                      sizes='100%'
                      loading='lazy'
                      className='object-cover rounded'
                      placeholder='blur'
                      blurDataURL={urlFor(image.image).url()}
                      onClick={() => {
                        setOpenModal(true), setUrl(urlFor(image.image).url())
                      }}
                    />
                  </div>
                )
              }
            })}
          </div>
        </div>
      </section>
      <Events events={events} />
      <Contact contact={contact[0]} />
      <div className={`${openModal ? 'absolute inset-0 z-20 bg-dark bg-opacity-90' : 'hidden'}`}>
        <div
          className='fixed inset-y-24 inset-x-4 z-30 max-w-7xl md:inset-x-24 md:inset-y-60 xl:top-[20%] xl:left-[25%] 
        xl:h-[60%] xl:w-[50%]'
        >
          <Image
            src={url}
            alt=''
            fill
            sizes='100%'
            className='rounded-md object-cover'
            role='presentation'
            onClick={() => setOpenModal(false)}
          />
          <div className='absolute right-8 top-8 h-6 w-6 cursor-pointer text-slate-dark'>
            <MdClose className='h-8 w-8 text-dark' onClick={() => setOpenModal(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "gallery"] {
    category,
    image,
    name
  }`

  const eventsQuery = `*[_type == "event"] {
    ...,
  }`

  const contactQuery = `*[_type == "contactData"] {
    ...,
  }`

  const gallery = await sanityClient.fetch(pageQuery)
  const events = await sanityClient.fetch(eventsQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (
    gallery === null ||
    gallery.length === 0 ||
    events === null ||
    events.length === 0 ||
    contact === null ||
    contact.length === 0
  ) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      gallery,
      events,
      contact,
    },
    revalidate: 60,
  }
}
