import React from 'react'
import Image from 'next/image'
import { sanityClient } from '../../sanity'
import { PortableText } from '@portabletext/react'
import backgroundImage from '../../public/images/115-kitchen.jpg'
import Contact from '@/components/Contact'

export default function PrivacyPolicy({ privacyPolicy, contact }) {
  const block = privacyPolicy[0].block

  const CustomComponent = {
    block: {
      h2: ({ children }) => <h2 className='mt-8 text-orange'>{children}</h2>,
      h3: ({ children }) => <h3 className='mt-8 text-orange'>{children}</h3>,
      normal: ({ children }) => <p className='text-left max-w-full'>{children}</p>,
    },
    listItem: {
      bullet: ({ children }) => <li className='ml-12 list-disc'>{children}</li>,
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
        return (
          <a href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
            {children}
          </a>
        )
      },
    },
  }

  return (
    <>
      <section className='relative h-40 lg:h-80 w-full'>
        <Image src={backgroundImage} fill sizes='100%' role='presentation' alt='' className='object-cover rounded shadow-md' />
      </section>

      <section>
        <div className='section-container flex-col gap-4'>
          <PortableText value={block} components={CustomComponent} />
        </div>
      </section>
      <Contact contact={contact[0]} />
    </>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "privacyPolicy"] {
    ...,
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
  const privacyPolicy = await sanityClient.fetch(pageQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (privacyPolicy === null || privacyPolicy.length === 0 || contact === null || contact.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      privacyPolicy,
      contact,
    },
    revalidate: 60,
  }
}
