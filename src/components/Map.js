import React, { useMemo } from 'react'
import { GoogleMap, MarkerF, InfoWindow, useJsApiLoader } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY,
  })

  const center = useMemo(() => ({ lat: 48.62008, lng: 22.29425 }), [])

  const options = {
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
  }

  if (!isLoaded) return <div>Loading...</div>

  return (
    <GoogleMap zoom={15} options={options} center={center} mapContainerClassName='map-container'>
      <MarkerF position={center} />
    </GoogleMap>
  )
}

export default Map
