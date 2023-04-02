import React from 'react'
import Image from 'react-bootstrap/Image'

export default function Item({info}) {
  return (
    <div>
      <Image src={info.pictureUrl}/>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
    </div>
  )
}

