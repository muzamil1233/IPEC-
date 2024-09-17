
import "./hero.css"
import dark_arrow from "../../edusity_assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>our cutting-edge curriculm is designed to empower students
                with knowledge ,skills and experiences needed to excel in the dynamic feild of education 
            </p>
            <button className="btn"> Explore more <img src={dark_arrow}alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
