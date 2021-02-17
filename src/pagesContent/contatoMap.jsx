import React from "react"

export default function ContatoMap() {
  const mapUrl = process.env.GATSBY_GOOGLE_MAPS_URL
  return (
    <iframe
      title="cri1_map"
      width="100%"
      height="300"
      frameBorder="0"
      loading="lazy"
      style={{ border: 0 }}
      src={mapUrl}
      allowFullScreen
    />
  )
}
