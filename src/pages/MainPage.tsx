import { NavBar } from '../components/NavBar'
import { Presentation } from '../components/Presentation'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const MainPage = () => {
  return (
    <div>
        <NavBar/>
        <section id="home">
          <Presentation/>
        </section>
        <section id="portfolio">
          <Portfolio/>
        </section>
        <section id="services">
          <Services/>
        </section>
        <section id="contact">
          <Contact/>
        </section>
        <Footer/>
    </div>
  )
}
