import React from 'react'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import Services from '@/components/Services'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'

export default function Celebration({ celebration, events, contact }) {
  const { mainImage, services } = celebration[0]

  return (
    <>
      <section className='relative h-40 lg:h-80 w-full'>
        <Image
          src={urlFor(mainImage).url()}
          fill
          sizes='100%'
          role='presentation'
          alt=''
          className='object-cover rounded shadow-md'
        />
      </section>
      <Services services={services} linkUrl='#contact' linkName='Контакт' />
      <Events events={events} />
      <Contact contact={contact[0]} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "celebrationPage"] {
    ...
  }`

  const eventsQuery = `*[_type == "event"] {
    ...,
  }`

  const contactQuery = `*[_type == "contactData"] {
    ...,
    mainImage->
  }`

  const celebration = await sanityClient.fetch(pageQuery)
  const events = await sanityClient.fetch(eventsQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (
    celebration === null ||
    celebration.length === 0 ||
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
      celebration,
      events,
      contact,
    },
    revalidate: 60,
  }
}
