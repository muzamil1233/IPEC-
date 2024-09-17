
import { useState } from 'react'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import Hero from './Components/hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Title from './Components/Title/Title'
import Videoplayer from './Components/videoplayer/Videoplayer'

const App = () => {
  const[playstate,setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
       <div className="container"> 
       <Title subTitle = "Our PROGRAM" title = "What we Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle = "Gallery" title = "Campus photo" />
        <Campus />
        <Title subTitle = "Testimonials" title = "What students say" />
        <Testimonials />
        <Title subTitle = "Contact us " title = "Get in touch" />
        <Contact />
        <Footer />
        <Videoplayer playstate= {playstate} setPlayState = {setPlayState} />

       
        </div>
      
    </div>
  )
}

export default App
