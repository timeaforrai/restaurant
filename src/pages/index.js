import About from '@/components/About'
import Contact from '@/components/Contact'
import Events from '@/components/Events'
import HomeGallery from '@/components/HomeGallery'
import HomeHero from '@/components/HomeHero'
import HomeServices from '@/components/HomeServices'
import TextLink from '@/templates/TextLink'
import Head from 'next/head'
import { sanityClient } from '../../sanity'

export default function Home({ homePage, events, contact }) {
  const { showcase, about, services, menu, gallery, meta } = homePage[0]

  return (
    <>
      <Head>
        <title>115 Kitchen&bar</title>
        <meta name='description' content={meta} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <HomeHero showcase={showcase} />
        <About about={about} />
        <HomeServices services={services} />
        <section className='bg-light text-dark'>
          <div className='section-container flex-col justify-center items-center gap-4'>
            <h2>{menu.title}</h2>
            <p className='text-center'>{menu.description && menu.description}</p>
            <TextLink name='Меню' route='https://115.choiceqr.com/online-menu' classes='text-orange-dark hover:text-orange' />
          </div>
        </section>
        <HomeGallery gallery={gallery} />
        <Events events={events} />
        <Contact contact={contact[0]} />
      </>
    </>
  )
}

export async function getStaticProps() {
  const pageQuery = `*[_type == "homePage"] {
    showcase{
      description,
      name,
      image {
        asset->{
          ...,
          metadata
        }
      }
    },
    about {
      title,
      description,
      image {
        asset-> {
          ...,
          metadata,
        }
      }
    },
    services{
      title,
      services {
        business {
          title,
          image {
            asset-> {
              ...,
              metadata
            }
          }
        },celebration {
          title,
          image {
            asset-> {
              ...,
              metadata
            }
          }
        },
        drinks {
          title,
          image {
            asset-> {
              ...,
              metadata
            }
          }
        },
        food {
          title,
          image {
            asset-> {
              ...,
              metadata
            }
          }
        },
        takeaway {
          title,
          image {
            asset-> {
              ...,
              metadata
            }
          }
        },
      }
    },
    gallery{
      title,
      description,
      gallery[]->
      {
        category,
        name,
        image {
          asset-> {
            ...,
            metadata
          }
        }
      },
    },
    menu {
      title,
      description
    }
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

  const homePage = await sanityClient.fetch(pageQuery)
  const events = await sanityClient.fetch(eventsQuery)
  const contact = await sanityClient.fetch(contactQuery)

  if (
    homePage === null ||
    homePage.length === 0 ||
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
      homePage,
      events,
      contact,
    },
    revalidate: 60,
  }
}
