import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'

function Img({ source, altValue, classes, ...props }) {
  return (
    <Image
      className={`object-cover ${classes}`}
      src={source.image ? urlFor(source.image).url() : urlFor(source).url()}
      alt={altValue}
      fill
      sizes='100%'
      placeholder='blur'
      blurDataURL={source.image ? source.image.asset.metadata.lqip : source.asset.metadata.lqip}
      {...props}
    />
  )
}

export default Img
