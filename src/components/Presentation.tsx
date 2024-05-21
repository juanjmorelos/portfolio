import React from 'react'
import { CircleAvatar } from './CircleAvatar'
import imgAvatar from '../assets/avatarImage.jpg'

export const Presentation = () => {
  return (
    <div className='presentation'>
        <div className="content">
            <CircleAvatar img={imgAvatar} alt='Imagen de perfil'/>
            <h1 className='name'>Juan Morelos</h1>
            <h2 className='career'>Ingeniero de sistemas</h2>
            <p className='cover-letter'>Ingeniero de sistemas con dos años de
            experiencia en el desarrollo de
            aplicaciones móviles nativas y
            multiplataforma, como también en el
            desarrollo web, utilizando Flutter, Java,
            Kotlin, Jetpack Compose y Angular. Con
            horas de vuelo en la nube tales como en
            Firebase. Experiencia en consumo de
            API’s y gestión de tiendas Google Play
            Store y Apple Store. Tengo experiencia
            usando patrones de diseño MVC, MVVM,
            Singleton, utilizando siempre las buenas
            prácticas de desarrollo.
            Con cualidades tales como proactivo,
            trabajo en equipo, siempre en constante
            aprendizaje, adaptativo, dispuesto.</p>
        </div>
    </div>
  )
}
