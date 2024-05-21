import React from 'react'

interface Props {
    img: string,
    alt: string
}

export const CircleAvatar = ({img, alt}: Props) => {
  return (
    <div className='imageContainer'>
        <img src={img} alt={alt} className='image'/>
    </div>
  )
}
