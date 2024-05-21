import React from 'react'

interface Props {
    href: string;
    icon: string
}

export const NetworkButton = ({href, icon}:Props) => {
  return (
    <a href={href} className='button-network'>
        <i className={icon}></i>
    </a>
  )
}
