import React from 'react'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import Services from '@/components/Services'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Head from 'next/head'

export default function Restaurant({ restaurant, events, contact }) {
  const { mainImage, services, meta } = restaurant[0]

  return (
    <>
      <Head>
        <title>115 Kitchen&bar || Ресторан</title>
        <meta name='description' content={meta} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
      <Services services={services} linkUrl='https://115.choiceqr.com/online-menu' linkName='Меню' />
      <Events events={events} />
      <Contact contact={contact[0]} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "restaurantPage"] {
    ...
  }`

  const eventsQuery = `*[_type == "event"] {
    ...,
  }`

  const contactQuery = `*[_type == "contactData"] {
    ...,
    mainImage->
  }`

  const restaurant = await sanityClient.fetch(pageQuery)
  const events = await sanityClient.fetch(eventsQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (
    restaurant === null ||
    restaurant.length === 0 ||
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
      restaurant,
      events,
      contact,
    },
    revalidate: 60,
  }
}
