import React from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

function TextLink({ route, name, classes }) {
  return (
    <Link href={route} className={`text-link ${classes}`} target='_blank'>
      {name}
      <HiArrowRight className='' />
    </Link>
  )
}

export default TextLink
