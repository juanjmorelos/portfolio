import React from 'react'

export const Contact = () => {
  return (
    <div className="section contact-margin">
        <h3>Contacto</h3>
        <div className="contact-section">
            <a className="phone" href='tel:+573215835991'>
                <i className="fa-solid fa-phone"></i>
                <p className="title">Telefono</p>
                <p>(57) 3215835991</p>
            </a>
            <a className="phone" href='https://api.whatsapp.com/send?phone=573215835991&text=Hola%2C%20estoy%20interesado%2Fa%20en'>
                <i className="fa-brands fa-whatsapp"></i>
                <p className="title">WhatsApp</p>
                <p>(57) 3215835991</p>
            </a>
            <div className="phone">
                <i className="fa-solid fa-envelope"></i>
                <p className="title">Email</p>
                <p>juanjmorelos13@gmail.com</p>
            </div>
            <div className="phone">
                <i className="fa-solid fa-location-dot"></i>
                <p className="title">Localización</p>
                <p>Colombia</p>
            </div>
        </div>
    </div>
  )
}
