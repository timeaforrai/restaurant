import React from 'react'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Image from 'next/image'
import Services from '@/components/Services'

export default function Business({ business, events, contact }) {
  const { mainImage, services } = business[0]

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
  const pageQuery = `*[_type == "businessPage"] {
    ...
  }`

  const eventsQuery = `*[_type == "event"] {
    ...,
  }`

  const contactQuery = `*[_type == "contactData"] {
    ...,
    mainImage->
  }`

  const business = await sanityClient.fetch(pageQuery)
  const events = await sanityClient.fetch(eventsQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (
    business === null ||
    business.length === 0 ||
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
      business,
      events,
      contact,
    },
    revalidate: 60,
  }
}
