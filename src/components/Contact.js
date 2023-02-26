import Map from './Map'

const ContactItem = ({ contactTitle, value }) => {
  return (
    <div className='mb-6 md:mb-8'>
      <h3 className='text-orange '>{contactTitle}</h3>
      <p className='text-left'>{value}</p>
    </div>
  )
}

function Contact({ contact }) {
  return (
    <section id='contact' className='mt-auto'>
      <div className='section-container py-8 flex-col md:flex-row gap-8 md:py-16'>
        <div className='md:w-1/2 md:order-2 md:flex md:justify-center md:items-center'>
          <div>
            <ContactItem contactTitle={contact.open.title} value={contact.open.value} />
            <ContactItem contactTitle={contact.address.title} value={contact.address.value} />
            <ContactItem contactTitle={contact.email.title} value={contact.email.value} />
            <ContactItem contactTitle={contact.phone.title} value={contact.phone.value} />
          </div>
        </div>
        <div className='text-dark w-full flex items-center md:w-1/2 h-96 bg-light rounded'>
          <Map />
        </div>
      </div>
    </section>
  )
}

export default Contact
