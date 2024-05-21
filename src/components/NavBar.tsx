import React from 'react'
import '../styles/styles.css';
import { Logo } from './Logo';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div><Logo/></div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="#home" className="navbar-link">Inicio</a></li>
        <li className="navbar-item"><a href="#portfolio" className="navbar-link">Portafolio</a></li>
        <li className="navbar-item"><a href="#services" className="navbar-link">Servicios</a></li>
        <li className="navbar-item"><a href="#contact" className="navbar-link">Contacto</a></li>
        <li className="navbar-item cv-item"><a href="../assets/cv.pdf" className="navbar-cv" target="_blank"> <i className="fa-solid fa-file-pdf"></i> Descargar CV</a></li>
      </ul>
    </nav>
  )
}
