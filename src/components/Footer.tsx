import React from 'react'
import { Logo } from './Logo'
import { NetworkButton } from './NetworkButton'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-header">
            <Logo/> Juan Morelos
        </div>
        <div className="footer-media">
            <NetworkButton href="https://github.com/juanjmorelos" icon="fa-brands fa-github" />
            <NetworkButton href="https://www.linkedin.com/in/juan-morelos-acosta-9532b8272/" icon="fa-brands fa-linkedin in" />
            <NetworkButton href="../assets/cv.pdf" icon="fa-solid fa-file-pdf" />
        </div>
        <span>CopyRight ® 2024 Todos los derechos reservados. Diseñado por Juan Morelos</span>
    </div>
  )
}
