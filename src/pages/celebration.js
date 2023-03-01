import React from 'react'
import Head from 'next/head'
import { sanityClient } from '../../sanity'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import Services from '@/components/Services'
import Img from '@/templates/Img'

export default function Celebration({ celebration, events, contact }) {
  const { mainImage, services, meta } = celebration[0]

  return (
    <>
      <Head>
        <title>115 Kitchen&bar || Святкування</title>
        <meta name='description' content={meta} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='relative h-40 lg:h-80 w-full'>
        <Img source={mainImage} altValue='' classes='rounded shadow-md' role='presentation' priority />
      </section>
      <Services services={services} linkUrl='#contact' linkName='Контакт' />
      <Events events={events} />
      <Contact contact={contact[0]} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "celebrationPage"] {
    mainImage {
      asset-> {
        ...,
        metadata
      }
    },
    meta,
    services[] {
      title,
      description,
      image {
        asset-> {
          ...,
          metadata
        }
      }
    },
  }`

  const eventsQuery = `*[_type == "event"] {
    name,
    date,
    location,
    image {
      asset-> {
        ...,
        metadata
      }
    },  
}`
  const contactQuery = `*[_type == "contactData"] {
    address {
      title,
      value
    },
    email {
      title,
      value
    },
    open {
      title,
      value
    },
    phone {
      title,
      value
    }
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
