import React from 'react'
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <div className="section service-section">
        <h3>Servicios</h3>
        <p>Ofrezco servicios como desarrollador frontend en las siguientes tecnologías</p>
        <div className="service-container">
            <ServiceCard img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztvcotJdGL2Y2aw9VODom93XN2jDQNu8ZtIEdcwGgYw&s' serviceName='Desarrollador Flutter' className='flutter-class'/>
            <ServiceCard img='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1173px-Android_logo_2019_%28stacked%29.svg.png' serviceName='Desarrollador Android con Kotlin y Java'/>
            <ServiceCard img='https://tabris.com/wp-content/uploads/2021/06/jetpack-compose-icon_RGB.png' serviceName='Desarrollador Android Jetpack Compose'/>
            <ServiceCard img='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' serviceName='Desarrollador web Angular'/>
            <ServiceCard img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' serviceName='Desarrollador web React'/>
            <ServiceCard img='https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png' serviceName='Desarrollador React-Native'/>
        </div>
    </div>
  )
}
