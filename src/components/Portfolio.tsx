import { CardApp } from './CardApp'

export const Portfolio = () => {
  return (
    <div className='section'>
        <h3>Portafolio</h3>
        <div className="card-container">
            <CardApp title="Tenser" 
            img="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2e/1d/a8/2e1da8ac-f53f-f529-944f-45bad4078ed9/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp" 
            links={["https://play.google.com/store/apps/details?id=com.ludycom.tenser&hl=es_419&gl=US", "https://apps.apple.com/us/app/tenser/id1633725995"]}
            mobile technology='flutter'>
                Tuve el privilegio de ser parte del equipo de desarrollo encargado de realizar esta aplicación, 
                la cual fue desarrollada para la empresa Ludycom. Se utilizó patron BLoC y BLoC Provider como gestor de estado
            </CardApp>
            <CardApp title="Fire Control Extinguisher" 
            img="https://play-lh.googleusercontent.com/cgtJ59P_XE_C0YEF--NtOjxbZofzDqUD4Itkm-xWeSacbfDfGv04ILTgTtmFXAzIb6BY=w480-h960-rw" 
            links={["https://play.google.com/store/apps/details?id=com.ludycom.albafss&hl=es_419&gl=US"]}
            mobile technology='flutter'>
                Hice parte del equipo de desarrollo encargado de realizar esta aplicación, 
                la cual fue desarrollada para la empresa Ludycom. De este aplicativo se realizó una aplicación web y una aplicación móvil.
                Se utilizó la arquitectura Domain Driven Design y como gestor de estado RiverPod
            </CardApp>
            <CardApp title="Cinemapedia" 
            img="https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-pelicula-rollo-camara-cine_527727-210.jpg?w=996" 
            links={["https://github.com/juanjmorelos/flutter_cinemapedia"]} 
            technology='flutter'>
                Aplicación móvil que muestra las peliculas actuales, las que estan por estrenar, las más populares, además permite al usuario agregar peliculas favoritas.
                Se utilizó la arquitectura Domain Driven Design y como gestor de estado RiverPod
            </CardApp>
            <CardApp title="Email otp validator" 
            img="https://img.freepik.com/vector-premium/ilustracion-concepto-introducir-codigo-otp-computadora-portatil-acceder-cuenta_156490-103.jpg?ga=GA1.1.118258544.1716257527&semt=sph" 
            links={["https://github.com/juanjmorelos/flutter_node_otp_validator"]}
             technology='flutter'>
                Esta aplicación móvil registra tu correo electrónico, genera un token de validación y envía un email con el token generado, luego valida que el token ingresado, sea el que se envió por correo electrónico.
                Se utilizó parte de la arquitectura Domain Driven Design y como gestor de estado RiverPod
            </CardApp>
            <CardApp title="LudyOrder" 
            img="https://play-lh.googleusercontent.com/XLGe2w3dd8tpdey7NX9yh37511CXRomV0Qp-jMhXP9KZPrfYiDGUfzqjA6lrpqB_jAm8=w480-h960-rw" 
            links={["https://play.google.com/store/apps/details?id=com.ludycom.ludyorder_2_0_0&hl=en&gl=US"]} 
            mobile technology='android'>
                Hice parte del equipo de desarrollo encargado de realizar esta aplicación, 
                la cual fue desarrollada para la empresa Ludycom. 
            </CardApp>
            <CardApp title="LudyOrder - Web" 
            img="https://play-lh.googleusercontent.com/XLGe2w3dd8tpdey7NX9yh37511CXRomV0Qp-jMhXP9KZPrfYiDGUfzqjA6lrpqB_jAm8=w480-h960-rw" 
            links={["https://ludyorder.com/lcc/FTP/#/login?product=ludyorder&return_to=https:%2F%2Fludyorder.com%2Fldo%2FLIVE%2F"]} 
            technology='web'>
                Hice parte del equipo de desarrollo encargado de realizar esta aplicación, 
                la cual fue desarrollada para la empresa Ludycom. Esta fue desarrollada utilizando Angular
            </CardApp>
            <CardApp title="LudyField" 
            img="https://play-lh.googleusercontent.com/AkTTqOHixNgfWnIQmgaVbatxYbnEYCS-0XA8pxaksXd36X5tkYTibYxhuG1coBwx9ZX-=w480-h960-rw" 
            links={["https://play.google.com/store/apps/details?id=com.ludycom.fieldapp&hl=en&gl=US"]}
            mobile technology='android'>
                Tuve el privilegio de liderar y también de hacer parte del desarrollo esta aplicación, 
                la cual fue desarrollada para la empresa Ludycom. Se utilizo arquitectura MVC
            </CardApp>
            <CardApp title="Rick and Morty" 
            img="https://indiehoy.com/wp-content/uploads/2020/06/rick-and-morty-1.jpg" 
            links={["https://github.com/juanjmorelos/RickAndMorty"]}
            technology='android'>
                Aplicación móvil que lista los personajes principales de la serie rick y morty, además de mostrar en detalle las características del mismo. Se utilizó arquitectura MVVM y JectPack Compose
            </CardApp>
        </div>
    </div>
  )
}
