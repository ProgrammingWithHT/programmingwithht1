
import Main from '../components/home/Main'
import About from '@/components/about/About'
import Skills from '@/components/myskills/Skills'
import Services from '@/components/services/Services'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'


export default function Home () {
  return(
    <div>
      <Main />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

